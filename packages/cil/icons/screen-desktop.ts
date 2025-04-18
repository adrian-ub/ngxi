import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilScreenDesktopIcon],svg[cil-screen-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 392h200v72h-80v32h192v-32h-80v-72h200a24.03 24.03 0 0 0 24-24V72a24.03 24.03 0 0 0-24-24H40a24.03 24.03 0 0 0-24 24v296a24.03 24.03 0 0 0 24 24m8-312h416v280H48Z"></svg:path>`,
})
export class CilScreenDesktopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
