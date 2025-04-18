import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEvoland2Icon],svg[arcticons-evoland-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.618 29.823c-.78 0-1.805.392-1.805 1.352c0 .811.808 1.469 1.805 1.469h0c.997 0 1.805-.658 1.805-1.469c0-.96-1.029-1.352-1.805-1.352M13.714 40.82v-5.06c-2.145-.326-4.017-1.19-5.224-2.41l.933-2.38h1.836V11.46c0-1.664 2.645-6.303 4.36-6.961c1.714.658 4.359 5.297 4.359 6.961v19.51h1.836l.933 2.38c-1.207 1.22-3.08 2.084-5.225 2.41v5.06h.56c-.026 1.021-.31 1.985-.79 2.68h-3.349c-.479-.695-.763-1.659-.79-2.68zm1.904-10.997V12.469m16.764 5.708c.78 0 1.805-.392 1.805-1.352c0-.811-.808-1.469-1.805-1.469h0c-.997 0-1.805.658-1.805 1.469c0 .96 1.029 1.352 1.805 1.352M34.286 7.18v5.06c2.145.326 4.017 1.19 5.224 2.41l-.933 2.38h-1.836v19.51c0 1.664-2.645 6.303-4.36 6.961c-1.714-.658-4.359-5.297-4.359-6.961V17.03h-1.836l-.933-2.38c1.207-1.22 3.08-2.084 5.225-2.41V7.18h-.56c.026-1.022.31-1.985.79-2.68h3.348c.48.695.764 1.659.79 2.68zm-1.904 10.997v17.355"></svg:path>`,
})
export class ArcticonsEvoland2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
