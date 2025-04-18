import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMobilePhoneIcon],svg[ix-mobile-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 85.335c0-23.564 19.103-42.667 42.667-42.667h170.666c23.565 0 42.667 19.103 42.667 42.667v341.333c0 23.564-19.103 42.667-42.667 42.667H170.667c-23.564 0-42.667-19.103-42.667-42.667zm42.667 0v341.333h170.666V85.335z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M277.333 405.335h-42.666v-42.667h42.666zm-64-298.667h85.334v21.333h-85.334z"></svg:path>`,
})
export class IxMobilePhoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
