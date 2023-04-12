import { rest } from 'msw'

const BASE_DOMAIN = 'http://localhost:8080'

const handlers = [
  rest.get(`${BASE_DOMAIN}/userInfo/table`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 'OK',
        message: 'Gets User Info successfully',
        data: Array.from({ length: 21 }, (v, i) => ({
          name: `Jimmy${i + 1}`,
          age: 20 + i,
          address: `Jimmy${i + 1} Downing Street`,
        })),
      })
    )
  }),
]

export default handlers
