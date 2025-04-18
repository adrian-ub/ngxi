import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowRangeIcon],svg[material-symbols-light-arrow-range-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.308 16.308L3 12.019l4.289-4.288l.707.688L4.921 11.5H19.08l-3.075-3.08l.707-.69L21 12.02l-4.288 4.288l-.727-.689l3.094-3.1H4.902l3.094 3.1z"></svg:path>`,
})
export class MaterialSymbolsLightArrowRangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
