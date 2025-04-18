import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdvScreenRecorderIcon],svg[arcticons-adv-screen-recorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m41.77 14.3l-8.853 5.112v-6.195a2.306 2.306 0 0 0-2.306-2.306H6.806A2.306 2.306 0 0 0 4.5 13.217v21.566a2.306 2.306 0 0 0 2.306 2.306h23.805a2.306 2.306 0 0 0 2.306-2.306v-6.195l8.853 5.111a1.153 1.153 0 0 0 1.73-.998V15.299c0-.887-.96-1.442-1.73-.998"></svg:path><svg:circle cx="10.654" cy="17.065" r="2.695" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.917 19.412v9.176"></svg:path>`,
})
export class ArcticonsAdvScreenRecorderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
