import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAttachedOutlineIcon],svg[bubbles-attached-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.618 15.345l8.666-8.666a2.04 2.04 0 1 1 2.883 2.883L7.461 21.305a4.078 4.078 0 0 1-5.767-5.768L13.928 3.305a5.606 5.606 0 0 1 7.929 7.928L13.192 19.9"></svg:path>`,
})
export class BubblesAttachedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
