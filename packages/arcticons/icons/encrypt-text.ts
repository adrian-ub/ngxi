import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEncryptTextIcon],svg[arcticons-encrypt-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.251 12.61h37.554v4.241H5.251zm0 16.841h19.505v4.241H5.251zm0-8.421H33.33v4.241H5.251z"></svg:path><svg:circle cx="40.686" cy="23.236" r="3.565" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.468 25.598l-10.08 7.397m3.048-2.237l1.823 2.447l-2.065 1.515l-1.805-2.46"></svg:path>`,
})
export class ArcticonsEncryptTextIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
