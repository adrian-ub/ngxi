import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatListNumbersIcon],svg[mdi-light-format-list-numbers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10.998v-1h3v.9l-1.8 2.1H5v1H2v-.9l1.8-2.1H2Zm1-3v-3H2v-1h2v4H3Zm-1 9v-1h3v4H2v-1h2v-.5H3v-1h1v-.5H2ZM20 6v1H7V6h13Zm0 6v1H7v-1h13Zm0 6v1H7v-1h13Z"></svg:path>`,
})
export class MdiLightFormatListNumbersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
