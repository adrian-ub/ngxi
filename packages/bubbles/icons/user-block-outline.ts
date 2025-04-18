import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesUserBlockOutlineIcon],svg[bubbles-user-block-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M.75 17.251a6.753 6.753 0 0 1 9.4-6.208M3.375 4.876a4.125 4.125 0 1 0 8.25 0a4.125 4.125 0 0 0-8.25 0m7.875 12.373a6 6 0 1 0 12 0a6 6 0 0 0-12 0m1.758 4.241l8.484-8.484"></svg:path>`,
})
export class BubblesUserBlockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
