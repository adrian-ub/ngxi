import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLegalHammerIcon],svg[hugeicons-legal-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.998 2c-2.85 0-4.697 2.02-6.882 2.755c-.888.3-1.333.449-1.512.66c-.18.21-.233.519-.338 1.135c-1.127 6.596 1.336 12.694 7.209 15.068c.631.255.947.382 1.526.382s.896-.127 1.527-.382c5.873-2.374 8.333-8.472 7.206-15.068c-.106-.616-.158-.924-.338-1.135s-.624-.36-1.512-.66C16.698 4.02 14.848 2 11.998 2"></svg:path><svg:path d="M11.833 12.167c1.055 1.055 2.445 2.127 2.445 2.127l1.905-1.905s-1.072-1.39-2.127-2.445s-2.445-2.127-2.445-2.127L9.706 9.722s1.072 1.39 2.127 2.445m0 0L8.5 15.5m8-3.429l-2.54 2.54M11.93 7.5l-2.54 2.54"></svg:path></svg:g>`,
})
export class HugeiconsLegalHammerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
