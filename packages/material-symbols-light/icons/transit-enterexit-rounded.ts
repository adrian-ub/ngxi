import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTransitEnterexitRoundedIcon],svg[material-symbols-light-transit-enterexit-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.766 15.616h4.85q.355 0 .62.255q.264.255.264.62t-.264.63t-.62.264H7.539q-.344 0-.576-.233q-.232-.232-.232-.575V9.5q0-.356.255-.62q.256-.265.62-.265q.365 0 .63.265q.264.264.264.62v4.827l6.854-6.854q.262-.257.64-.257t.637.26t.257.639t-.257.635z"></svg:path>`,
})
export class MaterialSymbolsLightTransitEnterexitRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
