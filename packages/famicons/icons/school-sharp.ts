import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsSchoolSharpIcon],svg[famicons-school-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 370.43L96 279v98.42l160 88.88l160-88.88V279z"></svg:path><svg:path fill="currentColor" d="M512.25 192L256 45.57L-.25 192L256 338.43l208-118.86V384h48V192.14z"></svg:path>`,
})
export class FamiconsSchoolSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
