import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilFacebookMessengerSolidIcon],svg[basil-facebook-messenger-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 12a9.5 9.5 0 1 1 6.516 9.022l-2.858.952A.5.5 0 0 1 5.5 21.5v-2.572A9.48 9.48 0 0 1 2.5 12m12.277 2.038l2.65-3.92c.262-.386-.235-.805-.615-.529l-2.858 2.015a.57.57 0 0 1-.652 0l-2.116-1.477c-.633-.437-1.538-.277-1.963.335l-2.65 3.92c-.262.386.235.806.615.529l2.858-2.015a.57.57 0 0 1 .652 0l2.116 1.452c.633.462 1.538.302 1.963-.31" clip-rule="evenodd"></svg:path>`,
})
export class BasilFacebookMessengerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
