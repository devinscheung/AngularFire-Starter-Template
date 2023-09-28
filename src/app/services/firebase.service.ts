import { Injectable } from '@angular/core';
import { Firestore, collection, doc, addDoc, getDoc, getDocs, setDoc, updateDoc, deleteDoc } from "@angular/fire/firestore";

@Injectable({
    providedIn: 'root',
})

export class FirebaseService { 

    constructor(private db:Firestore) {}

    // Create (Ramdom ID)
    async createDocument(collectionName: string, data: any) {
        try {
            const docRef = await addDoc(collection(this.db, collectionName), data);
            return docRef.id;  // Return the ID of the new document
        } catch (error) {
            console.error('Error creating document:', error);
            throw error;
        }
    }

    // Create (Custom ID)
    async createDocumentWithId(collectionName: string, documentId: string, data: any) {
        try {
            const docRef = doc(this.db, collectionName, documentId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.error('Document already exists');
                return false;  // Indicate failure
            } else {
                await setDoc(docRef, data);
                return true;  // Indicate success
            }
        } catch (error) {
            console.error('Error creating document:', error);
            throw error;
        }
    }

    // Read (single document)
    async getDocument(collectionName: string, documentId: string) {
        try {
          const docSnap = await getDoc(doc(this.db, collectionName, documentId));
          if (docSnap.exists()) {
            return docSnap.data();
          } else {
            console.error('Document not found');
            return null;
          }
        } catch (error) {
          console.error('Error fetching document:', error);
          throw error;  // or handle error as needed
        }
    }

    // Read (multiple documents)
    async getDocuments(collectionName: string) {
        try {
            const querySnapshot = await getDocs(collection(this.db, collectionName));
            const documents:any = [];
            querySnapshot.forEach(doc => {
                documents.push({ id: doc.id, ...doc.data() });
            });
            return documents;
        } catch (error) {
            console.error('Error fetching documents:', error);
            throw error;  // or handle error as needed
        }
    }

    // Update
    async updateDocument(collectionName: string, documentId: string, data: any) {
        try {
            await updateDoc(doc(this.db, collectionName, documentId), data);
            return true;  // Indicate success
        } catch (error) {
            console.error('Error updating document:', error);
            throw error;
        }
    }

    // Delete
    async deleteDocument(collectionName: string, documentId: string) {
        try {
            const docRef = doc(this.db, collectionName, documentId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                await deleteDoc(docRef);
                return true;  // Indicate success
            } else {
                console.error('Document not found');
                return false;  // Indicate failure
            }
        } catch (error) {
            console.error('Error deleting document:', error);
            throw error;
        }
    }

}