import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAflatIcon],svg[picon-aflat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7q-3 0-1-1c-4-7 10-7 6 0q2 1-1 1M3 2q1 2 2 0m1 1Q4 4 6 5M5 6Q4 4 3 6M2 5q2-1 0-2"></svg:path>`,
})
export class PiconAflatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
