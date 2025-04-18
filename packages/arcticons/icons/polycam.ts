import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPolycamIcon],svg[arcticons-polycam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.044 19.746l-7.425-5.628L11.127 24l-1.7-1.336v-9.619l1.7 1.307L23.619 4.5l13.836 10.297"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.648 29.155l6.983-4.99l-.176-9.368l-12.924 9.972"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.53 24.77l12.384 8.877l1.658-1.217v9.853L36.914 43.5L24.53 34.153z"></svg:path>`,
})
export class ArcticonsPolycamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
