import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCozyIcon],svg[arcticons-cozy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.833 18.136c-2.45-11.53-17.035-11.425-19.735-.113C4.169 20.063 2.944 31.915 9.88 36.76c1.713 1.197 3.805 1.727 5.895 1.727H32.89c.921 0 1.848-.083 2.73-.346c9.698-2.888 9.16-18.236-1.71-20.013z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.17 27.802c2.285 2.493 7.343 2.528 9.638.066"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.603 26.966c-.242.624-.598 1.205-1.267 1.672m9.992-1.672c.242.624.599 1.205 1.268 1.672"></svg:path>`,
})
export class ArcticonsCozyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
