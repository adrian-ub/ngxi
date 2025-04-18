import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShiftOutlineIcon],svg[material-symbols-light-shift-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20v-7.23H5.115L12 3.576l6.885 9.192H15V20zm1-1h4v-7.23h2.775L12 5.245L7.225 11.77H10zm2-7.23"></svg:path>`,
})
export class MaterialSymbolsLightShiftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
