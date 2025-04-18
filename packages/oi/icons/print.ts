import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiPrintIcon],svg[oi-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v2h4V0zM.09 3C.03 3 0 3.04 0 3.09V5.9c0 .05.04.09.09.09H1v-2h6v2h.91c.05 0 .09-.04.09-.09V3.09C8 3.03 7.96 3 7.91 3H.1zM2 5v3h4V5z"></svg:path>`,
})
export class OiPrintIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
