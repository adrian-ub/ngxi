import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalDrinkIcon],svg[material-symbols-light-local-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.475 21q-.621 0-1.078-.407t-.532-1.022L4 3h16l-1.846 16.571q-.075.616-.532 1.022q-.456.407-1.078.407zM5.592 8.385h12.835L18.866 4H5.116zM12 18.115q.989 0 1.67-.68q.68-.681.68-1.67q0-.794-.48-1.696T12 11.385q-1.39 1.782-1.87 2.684t-.48 1.697q0 .988.68 1.669q.682.68 1.67.68"></svg:path>`,
})
export class MaterialSymbolsLightLocalDrinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
