import { db } from "../firebase";
import { collection, query, getDocs, where } from "firebase/firestore/lite";

interface RuleObject {
    name: string;
    text: string;
}

/**
 * 
 * @returns docs in firestore "Rule" Collection
 */
export const getRule = async (game: string): Promise<RuleObject[]> => {
    // eslint-disable-next-line no-useless-catch
    try {
        /**
         * fireStore "Rule" Collection
         */
        const Collection = collection(db, "Rule");
        /**
         * @todo "Rule" Collection을 불러옴
         */
        const q = query(Collection, where("name", "==", game));
        
        /**
         * @todo "Archery" Collection의 문서들을 비동기로 받아옴
         */
        const data = await getDocs(q);
        /**
         * @todo 받아온 데이터를 새로운 Object에 저장
         */
        const newData: RuleObject[] = data.docs.map(doc => ({
            name: doc.data().name,
            text: doc.data().text,
        }));
        
        return newData;
    } catch (e) {
        throw e;
    }
}