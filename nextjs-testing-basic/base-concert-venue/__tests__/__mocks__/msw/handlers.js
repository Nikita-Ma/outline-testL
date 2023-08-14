import {rest} from 'msw'
import {readFakeData} from "@/__tests__/__mocks__/fakeData";


export const handlers = [
    rest.get("url", async (req,res,ctx)=> {
        await readFakeData()
        return res(ctx.json({show}))
    })
]