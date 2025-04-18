import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBasketIcon],svg[cil-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 304h32v128h-32zm80 0h32v128h-32zm80 0h32v128h-32zm80 0h32v128h-32z"></svg:path><svg:path fill="currentColor" d="M473.681 168L394.062 16h-36.124l79.619 152H74.443l79.619-152h-36.124L38.319 168H16v111.468L58.856 496h394.261L496 281.584V168ZM464 278.416L426.883 464H85.144L48 276.332V272h416ZM464 240H48v-40h416Z"></svg:path>`,
})
export class CilBasketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
