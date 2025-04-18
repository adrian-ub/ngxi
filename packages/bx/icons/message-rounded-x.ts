import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMessageRoundedXIcon],svg[bx-message-rounded-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"></svg:path><svg:path fill="currentColor" d="M14.293 6.293L12 8.586L9.707 6.293L8.293 7.707L10.586 10l-2.293 2.293l1.414 1.414L12 11.414l2.293 2.293l1.414-1.414L13.414 10l2.293-2.293z"></svg:path>`,
})
export class BxMessageRoundedXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
