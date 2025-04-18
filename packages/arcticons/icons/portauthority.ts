import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPortauthorityIcon],svg[arcticons-portauthority-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.448 39.5v-2.916h-2.252v-3.04h-5.741v-19.09h27.09v19.09h-5.741v3.04H29.55V39.5m-11.102 0h11.103M24 18.841v-4.386m-2.222 4.386v-4.386m4.444 4.386v-4.386m4.437 4.386v-4.386m-13.342 4.386v-4.386m11.127 4.386v-4.386m-8.888 4.386v-4.386"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.112 14.455v4.386h17.776v-4.386"></svg:path><svg:rect width="39" height="31" x="4.5" y="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsPortauthorityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
