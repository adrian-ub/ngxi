import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxPlusMedicalIcon],svg[bx-plus-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z"></svg:path>`,
})
export class BxPlusMedicalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
