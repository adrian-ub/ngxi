import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatListNumberedIcon],svg[mdi-light-format-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11v-1h3v.9L3.2 13H5v1H2v-.9L3.8 11zm1-3V5H2V4h2v4zm-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17zM20 6v1H7V6zm0 6v1H7v-1zm0 6v1H7v-1z"></svg:path>`,
})
export class MdiLightFormatListNumberedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
