import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTriangleRulerPencilIcon],svg[marketeq-triangle-ruler-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m30.604 6.854l-2.916 2.917a2.083 2.083 0 0 0 0 2.916l10.229 10.23h5.833v-5.834L33.52 6.854a2.083 2.083 0 0 0-2.916 0"></svg:path><svg:path stroke="#306CFE" d="M39.583 43.75H6.25V10.417z"></svg:path></svg:g>`,
})
export class MarketeqTriangleRulerPencilIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
