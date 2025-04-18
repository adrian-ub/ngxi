import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRecordYouIcon],svg[arcticons-record-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.03 25.59a7.03 7.03 0 0 1-14.06 0V11.53a7.03 7.03 0 0 1 14.06 0z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.919 25.59c0 6.582-5.336 11.919-11.919 11.919s-11.919-5.337-11.919-11.92M24 37.509V43.5"></svg:path>`,
})
export class ArcticonsRecordYouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
