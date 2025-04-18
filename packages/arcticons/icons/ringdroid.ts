import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRingdroidIcon],svg[arcticons-ringdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.86 32.68v-9h-7.69l15.33-5.85l-7.64.07V5.75l-21.75 5.06v11.46l7.65-.14l-15.33 5.54l7.68-.05v10.21"></svg:path><svg:ellipse cx="9.31" cy="38.77" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.04" ry="3.14" transform="rotate(-22.54 9.31 38.769)"></svg:ellipse><svg:ellipse cx="31.05" cy="33.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.04" ry="3.14" transform="rotate(-22.54 31.037 33.68)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.11 14.4l21.75-5.06"></svg:path>`,
})
export class ArcticonsRingdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
