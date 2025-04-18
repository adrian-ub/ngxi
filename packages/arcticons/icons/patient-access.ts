import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPatientAccessIcon],svg[arcticons-patient-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16.339" cy="18.406" r="3.612" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.894 15.85L24 10.746c4.232-4.232 11.094-4.232 15.326 0s4.232 11.094 0 15.326l-13.67 13.67a2.34 2.34 0 0 1-3.313 0L8.674 26.07c-4.232-4.232-4.232-11.094 0-15.326s11.094-4.232 15.326 0a10.837 10.837 0 0 1-2.866 17.381c-.93.336-1.349 1.394-.54 2.202l7.238 7.238M13.785 20.96l-5.111 5.112"></svg:path>`,
})
export class ArcticonsPatientAccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
