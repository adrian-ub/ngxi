import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhonelinkSetupOutlineSharpIcon],svg[material-symbols-light-phonelink-setup-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 15.154l-.073-.827q-.392-.075-.667-.24t-.483-.41l-.727.365l-.5-.865l.654-.48q-.127-.374-.127-.703t.127-.702l-.654-.48l.512-.854l.715.354q.208-.24.483-.402t.667-.237L17 8.846h1l.073.827q.393.075.668.237t.482.402l.716-.354l.511.854l-.654.48q.127.374.127.702t-.127.702l.654.481l-.5.865l-.727-.365q-.207.246-.482.41t-.668.24l-.073.827zm.5-1.615q.65 0 1.094-.445T19.038 12t-.444-1.094t-1.094-.444t-1.094.444T15.962 12t.444 1.094t1.094.444M6 22V2h12v4.923h-1V5.5H7v13h10v-1.423h1V22zm1-2.5V21h10v-1.5zm0-15h10V3H7zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightPhonelinkSetupOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
