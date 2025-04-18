import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDoorbell3pSharpIcon],svg[material-symbols-light-doorbell-3p-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21V3h12v18zm6-2.5q.778 0 1.331-.553q.554-.554.554-1.331q0-.778-.554-1.331q-.553-.554-1.331-.554t-1.331.554t-.553 1.33t.553 1.332T12 18.5m0-.77q-.463 0-.79-.325t-.326-.79t.326-.789t.79-.326t.79.326t.326.79t-.326.789t-.79.326m0-4.539q.38 0 .614-.232q.232-.233.232-.614h-1.692q0 .373.232.61t.614.236m-3.385-1.346h6.77v-.769h-.847V9.126q0-.955-.479-1.698q-.478-.743-1.376-1.002v-.949h-1.368v.942q-.896.322-1.375 1.04q-.479.72-.479 1.672v1.946h-.846z"></svg:path>`,
})
export class MaterialSymbolsLightDoorbell3pSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
