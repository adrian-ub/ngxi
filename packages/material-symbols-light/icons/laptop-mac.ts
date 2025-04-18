import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLaptopMacIcon],svg[material-symbols-light-laptop-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.27 19.27q-.518 0-.894-.377T1 18h3.616q-.691 0-1.153-.462T3 16.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v10.769q0 .69-.463 1.153T19.385 18H23q0 .517-.376.893t-.893.376zm9.73-.5q.252 0 .434-.183t.182-.433t-.182-.434t-.434-.18t-.434.181t-.182.434t.182.433t.434.182"></svg:path>`,
})
export class MaterialSymbolsLightLaptopMacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
