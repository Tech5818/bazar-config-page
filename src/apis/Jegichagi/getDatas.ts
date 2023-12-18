import { db } from "../../firebase";
import { collection, query, getDocs } from "firebase/firestore/lite";

/**
 * fireStore "Jegichagi" Collection
 */
const JegichagiCollection = collection(db, "Jegichagi");

/**
 * 
 * @returns docs in firestore "Jegichagi" Collection
 */
export const getDatas = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        /**
         * @todo "Jegichagi" Collection을 불러옴
         */
        const q = query(JegichagiCollection);
        
        /**
         * @todo "Jegichagi" Collection의 문서들을 비동기로 받아옴
         */
        const data = await getDocs(q);
        /**
         * @todo 받아온 데이터를 새로운 Object에 저장
         */
        const newData = data.docs.map(doc => ({...doc.data()}));
        
        return newData;
    } catch (e) {
        throw e;
    }
}