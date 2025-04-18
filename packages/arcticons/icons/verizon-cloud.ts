import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVerizonCloudIcon],svg[arcticons-verizon-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.67 19.195l-7.543 13l-4.385-7.556"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.784 35.573h23.978c13.016 0 10.84-19.586-2.215-15.243c0-10.876-19.586-10.876-19.586 2.178C2.073 20.33 2.073 35.573 10.784 35.573"></svg:path>`,
})
export class ArcticonsVerizonCloudIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
