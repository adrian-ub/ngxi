import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEmailActionReadOutlineIcon],svg[bubbles-email-action-read-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22.5 10v11.25a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5V10l8.647 6.859a3 3 0 0 0 3.706 0zm0 0l-8.307-7.3a3 3 0 0 0-4.386 0L1.5 10m14.308 5.308l2.942 2.942M8.192 15.308L5.25 18.25"></svg:path>`,
})
export class BubblesEmailActionReadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
