import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPhoneprofilesplusIcon],svg[arcticons-phoneprofilesplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.5v-23a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16 32.545a.75.75 0 1 0 .75.75a.74.74 0 0 0-.73-.75z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.16 33.395a2 2 0 0 1-2 2h-8.32a2 2 0 0 1-2-2v-18.79a2 2 0 0 1 2-2h8.32a2 2 0 0 1 2 2zM9.84 16.225h12.32m3.68-.5h12.32m-12.32 5.5h12.32m-12.32 5.5h12.32m-12.32 5.5h12.32m-28.32-1.54h12.32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.109 18.75l-4.218 5.2h4.218l-3.912 4.21"></svg:path>`,
})
export class ArcticonsPhoneprofilesplusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
