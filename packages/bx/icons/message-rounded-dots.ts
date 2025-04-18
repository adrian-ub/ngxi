import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMessageRoundedDotsIcon],svg[bx-message-rounded-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9.5" cy="9.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="14.5" cy="9.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.897 5.515 5 6.934V22l5.34-4.004C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.671 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"></svg:path>`,
})
export class BxMessageRoundedDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
