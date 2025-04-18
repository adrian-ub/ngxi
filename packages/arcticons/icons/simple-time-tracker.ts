import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimpleTimeTrackerIcon],svg[arcticons-simple-time-tracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.724 21.716l-9.26 9.26l-4.368-4.367"></svg:path><svg:circle cx="24.056" cy="26.186" r="16.216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24.183" cy="26.144" r="12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.623 15.488l2.529-2.85l-8.339-7.04l-2.454 2.914Zm-31.246 0l-2.529-2.85l8.338-7.04l2.455 2.914Z"></svg:path>`,
})
export class ArcticonsSimpleTimeTrackerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
