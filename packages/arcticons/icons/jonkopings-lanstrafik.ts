import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJonkopingsLanstrafikIcon],svg[arcticons-jonkopings-lanstrafik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.225 24H32.23c3.898 0 7.904 3.16 8.948 7.057l1.175 4.386c1.045 3.897-1.268 7.057-5.166 7.057h-14.82c-3.898 0-7.904-3.16-8.948-7.057L5.396 5.5m8.872 0l3.322 12.401"></svg:path><svg:circle cx="33.758" cy="31.208" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsJonkopingsLanstrafikIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
