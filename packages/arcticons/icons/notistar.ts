import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNotistarIcon],svg[arcticons-notistar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="35.679" cy="37.443" r="2.811" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.884" cy="9.411" r="1.249" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.01 26.267h29.98a2.5 2.5 0 0 1 2.498 2.499v11.237A2.5 2.5 0 0 1 38.99 42.5H9.01a2.5 2.5 0 0 1-2.499-2.498V28.765a2.5 2.5 0 0 1 2.497-2.498M9.01 5.5h29.98a2.5 2.5 0 0 1 2.498 2.498v11.237a2.5 2.5 0 0 1-2.497 2.498H9.01a2.5 2.5 0 0 1-2.499-2.499V7.997A2.5 2.5 0 0 1 9.01 5.5"></svg:path><svg:circle cx="10.922" cy="30.498" r="1.249" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="35.679" cy="16.378" r="2.811" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.447 9.41h10.45m5.809 0h6.784m-6.784 21.088h6.784m-23.16 0h10.626M9.673 37.602H20.3M9.673 16.378H20.3"></svg:path>`,
})
export class ArcticonsNotistarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
