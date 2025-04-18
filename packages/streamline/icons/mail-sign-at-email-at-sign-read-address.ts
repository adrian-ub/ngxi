import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMailSignAtEmailAtSignReadAddressIcon],svg[streamline-mail-sign-at-email-at-sign-read-address-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.05 7A3 3 0 1 1 7 4a3 3 0 0 1 3.05 3Z"></svg:path><svg:path d="M10.05 7v1.3c0 3.49 5.47.2 2.6-4.54A6.59 6.59 0 0 0 7 .5A6.5 6.5 0 1 0 9.52 13"></svg:path></svg:g>`,
})
export class StreamlineMailSignAtEmailAtSignReadAddressIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
