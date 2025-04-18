import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPercentFillIcon],svg[ri-percent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.505 21.003a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m-11-11a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m12.571-6.486l1.414 1.415L4.934 20.488L3.52 19.074z"></svg:path>`,
})
export class RiPercentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
