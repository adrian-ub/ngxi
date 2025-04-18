import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUrecordIcon],svg[arcticons-urecord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.89 13.41v14a7.11 7.11 0 1 0 14.22 0v-14"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M31.11 27.69a5.43 5.43 0 0 1 5.54-5.28h0m-5.54 0v14"></svg:path>`,
})
export class ArcticonsUrecordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
