import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowClockwiseIcon],svg[proicons-arrow-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.719 14.385a8.25 8.25 0 1 1-.824-6.26l.42.908m.58-4.658v3.75a1 1 0 0 1-.58.908m-4.17.092h3.75c.15 0 .293-.033.42-.092"></svg:path>`,
})
export class ProiconsArrowClockwiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
