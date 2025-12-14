import { Footer, Layout, Link, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../app/globals.css'

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const sidebar = {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
};

const themeSwitch = {
    dark: 'Donkere modus',
    light: 'Lichte modus',
    system: 'Systeem'
};

const feedback = {
    content: 'Vraag? Geef ons feedback!'
};

const banner = <Banner storageKey="some-key">
    We werken momenten aan een nieuw documentatie portaal. Heb u niet gevonden wat u zocht? Probeer dan is te zoeken op ons oude portaal: <a href="https://vl-wbk.github.io/documentatie-portaal/introductie.html">https://vl-wbk.github.io/documentatie-portaal</a>
</Banner>

const navbar = (
    <Navbar
        logo={<div><b>Vlaams Woordenboek</b> <span className={"italic text-zinc-400"}>documentatie</span></div>}
        // chatLink={"https://www.google.com"}
        projectLink={'https://github.com/vl-wbk/documentatie-portaal'}
    />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>

export default async function RootLayout({ children }) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
        <Head
            // ... Your additional head options
        >
            {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>
        <body>
        <Layout
            banner={banner}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/vl-wbk/documentatie-portaal/tree/main/docs"
            // footer={footer}
            feedback={feedback}
            editLink="Wijzig deze pagina"
            toc={{ title: 'Op deze pagina' }}
            themeSwitch={themeSwitch}
            sidebar={sidebar}
            // ... Your additional layout options
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}
