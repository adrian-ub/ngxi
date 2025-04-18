import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMobilePhoneFilledIcon],svg[ix-mobile-phone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 426.668c0 23.564-19.103 42.667-42.667 42.667H170.667c-23.564 0-42.667-19.103-42.667-42.667V85.335c0-23.564 19.103-42.667 42.667-42.667h170.666c23.564 0 42.667 19.103 42.667 42.667zm-106.667 0h-42.666v-42.667h42.666zm21.334-362.667h-85.334v21.334h85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxMobilePhoneFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
