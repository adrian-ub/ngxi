import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBookingIcon],svg[arcticons-booking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4l.001 33h33a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-5.617 28.907a2.47 2.47 0 0 1-2.464-2.476a2.47 2.47 0 0 1 2.464-2.475a2.475 2.475 0 0 1 0 4.951"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.89 24.406a5 5 0 0 1 0 9.998h-8.249V14.407h8.25a5 5 0 0 1 0 9.998zm0 0h-8.249"></svg:path>`,
})
export class ArcticonsBookingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
