import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesChevUpOutlineIcon],svg[bubbles-chev-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 14.917L11.717 9.2a.4.4 0 0 1 .566 0L18 14.917"></svg:path>`,
})
export class BubblesChevUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
