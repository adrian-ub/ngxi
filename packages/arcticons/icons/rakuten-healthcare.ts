import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRakutenHealthcareIcon],svg[arcticons-rakuten-healthcare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.221 35.235L24 40.6l10.105-9.38m2.628-2.44l1.063-.987h0c2.527-2.345 4.704-5.346 4.704-9.148c0-6.21-5.031-11.244-11.032-11.244c-2.848 0-5.478 1.134-7.468 2.99c-1.99-1.856-4.62-2.99-7.468-2.99C10.53 7.4 5.5 12.435 5.5 18.645c0 3.802 2.179 6.8 4.704 9.148l5.388 5.002"></svg:path>`,
})
export class ArcticonsRakutenHealthcareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
