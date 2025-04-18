import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatFloatCenterIcon],svg[mdi-light-format-float-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h17v1H3zm0 12h17v1H3zm13 4v1H3v-1zM8 7h7v7H8zm6 1H9v5h5z"></svg:path>`,
})
export class MdiLightFormatFloatCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
