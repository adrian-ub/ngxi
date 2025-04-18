import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdmIcon],svg[arcticons-adm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.34 33.04l5.25 6.71l8.91-11.38h-5.24V17.21h-7.34v6.63m-11.97-2.29h-1.87V10.39H9.74v11.16H4.5l8.91 11.38l2.67-3.41"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.22 23.84V8.25H18.95v15.59h-7.32l12.46 15.91l12.45-15.91z"></svg:path>`,
})
export class ArcticonsAdmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
