import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasSeverityHighIcon],svg[pajamas-severity-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.713.295l4.992 4.992a1.01 1.01 0 0 1 0 1.426l-4.992 4.992a1.01 1.01 0 0 1-1.426 0L.295 6.713a1.01 1.01 0 0 1 0-1.426L5.287.295a1.01 1.01 0 0 1 1.426 0"></svg:path>`,
})
export class PajamasSeverityHighIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
