import nextra from 'nextra'

const withNextra = nextra({
    //
})

export default withNextra({
    output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
})
