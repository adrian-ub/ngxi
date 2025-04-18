import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVaskehjelpIcon],svg[arcticons-vaskehjelp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.306 20.202h25.388m-23.254 0l1.037 21.12a2.29 2.29 0 0 0 2.287 2.178h14.472a2.29 2.29 0 0 0 2.287-2.177l1.038-21.12m-10.91 3.328l10.245 10.192"></svg:path><svg:circle cx="21.845" cy="30.144" r="1.92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="20.394" cy="13.205" r="4.246" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="27.392" cy="6.164" r="1.664" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.982 20.202a3.414 3.414 0 1 0-6.827 0"></svg:path>`,
})
export class ArcticonsVaskehjelpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
