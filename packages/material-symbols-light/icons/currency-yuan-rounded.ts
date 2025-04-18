import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCurrencyYuanRoundedIcon],svg[material-symbols-light-currency-yuan-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 19.5v-6H7q-.213 0-.356-.144t-.144-.357t.144-.356T7 12.5h4.302L6.398 4.78q-.171-.268-.018-.524T6.83 4q.137 0 .248.064q.112.065.174.18L12 11.742l4.748-7.498q.062-.116.174-.18T17.17 4q.297 0 .45.256q.153.255-.018.525L12.698 12.5H17q.213 0 .356.144t.144.357t-.144.356T17 13.5h-4.5v6q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356"></svg:path>`,
})
export class MaterialSymbolsLightCurrencyYuanRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
