import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatchPredictionOutlineSharpIcon],svg[material-symbols-light-batch-prediction-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21V8.673h12V21zm1-1h10V9.673H7zm4.27-1.558h1.46v-.769h-1.46zm.018-1.769h1.423q0-.475.142-.91q.141-.436.397-.83q.223-.367.42-.75t.195-.81q0-.784-.54-1.328T12 11.5q-.792 0-1.338.54q-.547.539-.547 1.333q0 .423.2.805t.416.749q.255.4.406.836t.151.91M6.904 6.712v-.885h10.173v.885zm.923-2.827V3h8.327v.885zM12 14.827"></svg:path>`,
})
export class MaterialSymbolsLightBatchPredictionOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
