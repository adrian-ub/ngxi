import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCarryOnBagCheckedOutlineSharpIcon],svg[material-symbols-light-carry-on-bag-checked-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.608 19.712l3.357-3.358l-.557-.558l-2.8 2.8l-1.4-1.4l-.558.558zM9.5 19V9H8v10zm2.277 1H7V8h7V4h-1.616V3H15v9.166q-.254.103-.518.236q-.265.133-.482.29V9h-3.5v10h.966q.055.273.128.512t.183.488m5.53-6.308q1.672 0 2.836 1.165t1.165 2.835q0 1.672-1.165 2.836q-1.164 1.164-2.835 1.164t-2.836-1.164t-1.164-2.836q0-1.67 1.164-2.835q1.165-1.165 2.836-1.165M9.5 19V9zm1 0V9z"></svg:path>`,
})
export class MaterialSymbolsLightCarryOnBagCheckedOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
