import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCompassFilledIcon],svg[tdesign-compass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11s11-4.925 11-11m-8.602 2.398l-7.06 2.265l2.265-7.06l7.06-2.264z"></svg:path>`,
})
export class TdesignCompassFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
