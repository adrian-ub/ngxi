import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFormulaIcon],svg[icon-park-formula-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 9L37 6H8L26 24L8 42H37L40 39"></svg:path>`,
})
export class IconParkFormulaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
