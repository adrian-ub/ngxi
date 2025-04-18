import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faGenderlessIcon],svg[fa-genderless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 704q0-185-131.5-316.5T576 256T259.5 387.5T128 704t131.5 316.5T576 1152t316.5-131.5T1024 704m128 0q0 117-45.5 223.5t-123 184t-184 123T576 1280t-223.5-45.5t-184-123t-123-184T0 704t45.5-223.5t123-184t184-123T576 128t223.5 45.5t184 123t123 184T1152 704"></svg:path>`,
})
export class FaGenderlessIcon {
  readonly viewBox = input("0 0 1152 1280")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
