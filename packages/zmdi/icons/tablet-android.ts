import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTabletAndroidIcon],svg[zmdi-tablet-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 0q27 0 45.5 18.5T384 64v384q0 27-18.5 45.5T320 512H64q-27 0-45.5-18.5T0 448V64q0-27 18.5-45.5T64 0zm-85 469v-21h-86v21zm112-64V64H37v341z"></svg:path>`,
})
export class ZmdiTabletAndroidIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
