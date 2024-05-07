import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from 'appwrite';


export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
    }

    //create a new document
    async createPost({title,  content, slug, featuredImage, status, userId}){
        
        
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                // slug,
                ID.unique(),
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite AuthService  :: createPost :: error",error);
            
        }
    }

    //update a new document by its unique ID
    async updatePost(slug, {title, content, featuredImage, status}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
        {
            title,
            content,
            featuredImage,
            status,

        }
    );
} catch (error) {
    console.log("Appwrite AuthService  :: updatePost ::error",error);
}
    }

    //delete document by its unique ID
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
         console.log("Appwrite AuthService  :: deletePost :: error",error);   
         return false
        }
    }

    //get document by its unique ID
    async getPost(slug){
        try {
         return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
         )   
        } catch (error) {
            console.log("Appwrite service :: getPost :: error",error);
            return false
        }
    }

    //list of all the user's documents in a given collection
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

            )
        } catch (error) {
            console.log("Appwrite service :: getPosts ::error",error);
            return false
        }
    }

    //create a new file
async uploadFile(file){
    try {
       return await this.bucket.createFile(
        conf.appwriteBucketId,        
        ID.unique(),
        file
       )  
    } catch (error) {
        console.log("Appwrite services :: uploadFile :: error",error);
        return false
    }
}

    //delete file by its unique ID
async deleteFile(fileId){
try {
    await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
    )
    return true
} catch (error) {
    console.log("Appwrite service :: deleteFile :: error",error);
    return false
}
}

    //get a file preview image
getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
}

}

const service = new Service()
export default service


