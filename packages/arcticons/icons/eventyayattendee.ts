import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEventyayattendeeIcon],svg[arcticons-eventyayattendee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.08 25.88l7.84-3.76a4.35 4.35 0 1 0-2.021 5.81l.021-.01a4.35 4.35 0 0 0 2.4-3.16"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 33.06a9.06 9.06 0 1 1 0-18.12a9.06 9.06 0 0 1 0 18.12"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 4.5c-2.216 0-4 1.784-4 4v31c0 2.216 1.784 4 4 4h7.174a4.34 4.34 0 0 1 8.652 0H35.5c2.216 0 4-1.784 4-4v-31c0-2.216-1.784-4-4-4h-7.16a4.34 4.34 0 0 1-8.68 0z"></svg:path>`,
})
export class ArcticonsEventyayattendeeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
