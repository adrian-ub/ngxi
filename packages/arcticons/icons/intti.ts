import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInttiIcon],svg[arcticons-intti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.295 8.362H7.705L4.5 11.568v7.915l3.205 3.205h32.59l3.205-3.205v-7.915zm-4.674 2.78v8.766m-23.242-8.766v8.766m10.061-8.766h5.808m-2.904 8.766v-8.766m5.147 0h2.904m-2.904 8.766v-8.766"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.612 19.908v-8.766l5.807 8.766v-8.766"></svg:path><svg:rect width="37.186" height="7.865" x="5.407" y="31.773" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.096"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.605 28.946h18.79"></svg:path>`,
})
export class ArcticonsInttiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
