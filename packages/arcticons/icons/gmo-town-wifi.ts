import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGmoTownWifiIcon],svg[arcticons-gmo-town-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.18 7.53c7.993-6.707 19.647-6.707 27.64 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.18 7.53c7.993-6.707 19.647-6.707 27.64 0m-22.948 5.792a14.2 14.2 0 0 1 18.255 0M19.436 18.96a7.1 7.1 0 0 1 9.128 0m11.906-8.78a21.5 21.5 0 0 1-18.344 35.238m-3.691-.652a21.5 21.5 0 0 1-9.638-5.564m-2.409-2.871A21.5 21.5 0 0 1 7.53 10.18"></svg:path><svg:circle cx="24" cy="24.599" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsGmoTownWifiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
