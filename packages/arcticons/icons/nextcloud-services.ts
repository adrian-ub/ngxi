import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNextcloudServicesIcon],svg[arcticons-nextcloud-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.105 33.705V22.486A13.694 13.694 0 0 0 28.1 9.33v-1.1a3.73 3.73 0 1 0-7.46 0v1.099a13.694 13.694 0 0 0-10.005 13.157v11.22L7.34 38.958a1.166 1.166 0 0 0 .988 1.786h31.344a1.166 1.166 0 0 0 1.048-1.678Zm-17.787 7.04a3.839 3.839 0 0 0 7.364 0"></svg:path>`,
})
export class ArcticonsNextcloudServicesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
