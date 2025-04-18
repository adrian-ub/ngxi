import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFilmstripIcon],svg[mdi-light-filmstrip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h1v2h2V4h9v2h2V4h1v17h-1v-2h-2v2H7v-2H5v2H4V4Zm3 3H5v3h2V7Zm0 4H5v3h2v-3Zm0 4H5v3h2v-3Zm9 3h2v-3h-2v3Zm0-4h2v-3h-2v3Zm0-4h2V7h-2v3ZM8 5v7h7V5H8Zm0 8v7h7v-7H8Z"></svg:path>`,
})
export class MdiLightFilmstripIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
