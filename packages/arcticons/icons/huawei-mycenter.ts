import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHuaweiMycenterIcon],svg[arcticons-huawei-mycenter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.822 20.88l-.054 4.772"></svg:path><svg:rect width="23.318" height="10.828" x="12.421" y="17.568" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.028"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 24a18.5 18.5 0 1 1-37 0c0-2.554 1.276-8.212 3.17-9.935c0 0-.59-6.827.426-7.596c.862-.652 6.899 1.235 6.899 1.235A14.4 14.4 0 0 1 24 5.5a14.4 14.4 0 0 1 8.404 2.13s5.795-2.1 6.934-1.094s.37 8.028.37 8.028A15.5 15.5 0 0 1 42.5 24m-12.483-3.12l-.054 4.772"></svg:path>`,
})
export class ArcticonsHuaweiMycenterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
