import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsMessageRoundedXIcon],svg[bx-bxs-message-rounded-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2C6.486 2 2 5.589 2 10c0 2.907 1.897 5.515 5 6.934V22l5.34-4.005C17.697 17.853 22 14.32 22 10c0-4.411-4.486-8-10-8zm3.707 10.293l-1.414 1.414L12 11.414l-2.293 2.293l-1.414-1.414L10.586 10L8.293 7.707l1.414-1.414L12 8.586l2.293-2.293l1.414 1.414L13.414 10l2.293 2.293z" fill="currentColor"></svg:path>`,
})
export class BxBxsMessageRoundedXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
