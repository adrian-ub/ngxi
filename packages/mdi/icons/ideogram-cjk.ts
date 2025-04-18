import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiIdeogramCjkIcon],svg[mdi-ideogram-cjk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4v2H4v4h2V8h12v2h2V6h-7V4m-5 6v2h5.59l-2 2H4v2h7v2h-1v2h3v-4h7v-2h-5.79L16 12.21V10Z"></svg:path>`,
})
export class MdiIdeogramCjkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
