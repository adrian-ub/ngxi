import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeepScreenOnIcon],svg[arcticons-keep-screen-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.87 40.958H13.443A3.454 3.454 0 0 1 9.985 37.5V20.51a3.454 3.454 0 0 1 3.458-3.458H33.89a3.454 3.454 0 0 1 3.457 3.458v5.813"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.82 17.052v-3.354a6.85 6.85 0 0 1 6.847-6.847c1.883 0 3.607.77 4.836 2.01a6.8 6.8 0 0 1 2.01 4.837v3.354"></svg:path><svg:circle cx="33.98" cy="34.146" r="8.518" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.98 29.723v4.423m2.501 2.565l-2.501-2.565"></svg:path>`,
})
export class ArcticonsKeepScreenOnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
