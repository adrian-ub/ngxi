import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsApEasypowerIcon],svg[arcticons-ap-easypower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.22 3.957C16.218 8.25 18.192 14.063 24 14.063s7.938-5.813 7.953-10.038m-.015 39.956c0-3.82-1.13-9.794-7.938-9.794s-7.781 5.84-7.781 9.856M39.688 9.298c-1.2 6.89-5.611 9.635-10.688 11.577v6.5c6.012 1.625 9.162 5.716 10.681 11.334M8.313 9.298c1.833 6.108 5.532 9.802 10.78 11.577l.063 6.5c-5.01 1.766-8.912 5.07-10.844 11.327"></svg:path>`,
})
export class ArcticonsApEasypowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
