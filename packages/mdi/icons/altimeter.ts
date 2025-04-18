import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAltimeterIcon],svg[mdi-altimeter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3v2h10V3zm2 4v2h6V7zm-7 .96v8.08L6.03 12zm20.03 0L18 12l4.03 4.04zM7 11v2h10v-2zm2 4v2h6v-2zm-2 4v2h10v-2z"></svg:path>`,
})
export class MdiAltimeterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
