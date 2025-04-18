import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalDrinkRoundedIcon],svg[material-symbols-light-local-drink-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.475 21q-.626 0-1.08-.407t-.53-1.022L4.14 4.283q-.067-.52.288-.901Q4.782 3 5.308 3h13.384q.526 0 .88.382q.355.382.288.9l-1.706 15.29q-.075.615-.53 1.021t-1.08.407zM5.592 8.385h12.835L18.866 4H5.116zM12 18.115q.99 0 1.67-.679t.681-1.667q0-.967-.582-1.885q-.581-.917-1.134-1.647q-.118-.171-.285-.247q-.168-.075-.349-.075t-.348.076t-.286.246q-.552.73-1.134 1.647q-.582.918-.582 1.885q0 .988.68 1.667t1.67.68"></svg:path>`,
})
export class MaterialSymbolsLightLocalDrinkRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
