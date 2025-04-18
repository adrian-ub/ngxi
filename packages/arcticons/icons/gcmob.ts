import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGcmobIcon],svg[arcticons-gcmob-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.504 23.544c6.978 14.744-5.644 17.227-17.695 17.222C10.571 40.761.153 38.48 6.321 23.544"></svg:path><svg:circle cx="23.81" cy="24" r="10.685" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="23.81" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.74" ry="6.021"></svg:ellipse><svg:circle cx="25.542" cy="21.97" r="3.213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.533 29.633c12.46-16.175 3.127-22.45-13.724-22.4c-19.302.058-24.363 5.412-13.722 22.401"></svg:path><svg:circle cx="23.81" cy="24" r="14.834" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsGcmobIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
