import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureUpFilledIcon],svg[tdesign-gesture-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 4a2.5 2.5 0 0 1 5 0v4h1.96a3 3 0 0 1 1.511.409l4.13 2.409a3 3 0 0 1 1.334 3.54l-2.03 6.09a3 3 0 0 1-2.846 2.052H8.735a3 3 0 0 1-2.378-1.17l-4.836-6.288l1.026-1.54a2 2 0 0 1 2.056-.851l3.147.63z"></svg:path>`,
})
export class TdesignGestureUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
