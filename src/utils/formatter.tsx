import dayjs from "dayjs"



export function joinedDate(ISO: string): string {
    const date = dayjs(ISO);
    const formateDate = `joined ${date.format("DD MM YYYY")}`

    return formateDate;
}