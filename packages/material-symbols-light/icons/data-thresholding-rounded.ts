import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDataThresholdingRoundedIcon],svg[material-symbols-light-data-thresholding-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zm5.059-9.711l1.435 1.434q.242.243.565.243t.566-.243l3.463-3.488q.14-.14.14-.335t-.14-.334q-.146-.147-.347-.153t-.342.133l-3.34 3.34l-1.434-1.434q-.243-.242-.566-.242t-.565.242l-2.794 2.794q-.141.14-.141.345q0 .203.14.344q.146.146.338.153q.191.006.332-.134zM7.321 16L5 18.321V19h.562l3-3zm3.7 0l-3 3h1.24l3-3zm3.648 0l-3 3h1.24l3-3zm3.654 0l-3 3h1.24L19 16.564V16z"></svg:path>`,
})
export class MaterialSymbolsLightDataThresholdingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
