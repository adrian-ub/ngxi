import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBeeIcon],svg[picon-bee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1c2-3 6 1 3 3q1 6-3 3c-2 3-6-1-3-3q-3-4 3-3m0 5q3 3 2-2M4 2q-5-1-2 2"></svg:path>`,
})
export class PiconBeeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
