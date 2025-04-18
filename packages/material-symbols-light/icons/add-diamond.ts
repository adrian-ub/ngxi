import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddDiamondIcon],svg[material-symbols-light-add-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 15.596h1V12.5h3.077v-1H12.5V8.423h-1V11.5H8.404v1H11.5zM12 21q-.323 0-.618-.118t-.551-.36l-7.34-7.347q-.237-.261-.364-.557Q3 12.323 3 12q0-.304.127-.609t.364-.541l7.34-7.346q.261-.262.554-.383Q11.677 3 12 3q.304 0 .612.121q.307.121.544.383l7.335 7.346q.255.242.382.544T21 12q0 .323-.124.618t-.386.557l-7.334 7.346q-.237.237-.544.358T12 21"></svg:path>`,
})
export class MaterialSymbolsLightAddDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
