import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBatIcon],svg[picon-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1q1 1 2 0v2q1 0 1-1h2Q6 4 7 6Q5 5 4 7Q3 5 1 6q1-2-1-4h2q0 1 1 1"></svg:path>`,
})
export class PiconBatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
