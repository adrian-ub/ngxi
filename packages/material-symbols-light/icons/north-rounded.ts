import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNorthRoundedIcon],svg[material-symbols-light-north-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-.213 0-.357-.143T11.5 20.5V4.864L6.677 9.68q-.14.14-.332.134q-.191-.007-.337-.153q-.14-.14-.14-.345t.14-.344l5.427-5.427q.13-.13.267-.184T12 3.31t.298.053t.268.184l5.446 5.446q.14.14.14.342q0 .2-.14.347q-.146.165-.357.155q-.21-.009-.357-.155L12.5 4.883V20.5q0 .214-.143.357T12 21"></svg:path>`,
})
export class MaterialSymbolsLightNorthRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
