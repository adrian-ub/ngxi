import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatQuoteOffRoundedIcon],svg[material-symbols-light-format-quote-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.725 20.439q-.165.159-.354.162t-.354-.162l-8.296-8.297l-2.85 4.916q-.067.11-.177.18t-.25.07q-.286 0-.43-.25t-.002-.5l1.969-3.423q-.173.096-.404.134t-.461.039q-1.4 0-2.354-.973T4.808 10q0-.79.328-1.448t.895-1.1l-2.47-2.47q-.14-.14-.15-.34q-.009-.201.15-.367q.166-.165.357-.165t.357.165l15.456 15.456q.146.146.153.344t-.159.364m-2.634-6.173l-3.02-3.02q-.288-.288-.41-.627q-.122-.338-.122-.721q0-.534.22-1.07q.222-.534.63-.982q.448-.532 1.094-.843t1.402-.31q1.361 0 2.334.973T20.192 10q0 .448-.118.874t-.335.818l-1.381 2.393q-.212.348-.593.41t-.674-.23"></svg:path>`,
})
export class MaterialSymbolsLightFormatQuoteOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
