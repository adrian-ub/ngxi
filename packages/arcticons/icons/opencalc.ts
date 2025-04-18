import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpencalcIcon],svg[arcticons-opencalc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="31" height="39" x="8.5" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.422 27.209v-5.417m2.723 2.71h-5.417m.787 11.066l3.83-3.83m.01 3.841l-3.83-3.83m17.751 3.817h-5.417m5.422-11.069h-5.417m5.417 7.315h-5.417"></svg:path><svg:rect width="21.865" height="7.497" x="13.067" y="10.001" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect>`,
})
export class ArcticonsOpencalcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
