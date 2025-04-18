import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScoreOutlineSharpIcon],svg[material-symbols-light-score-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm5-6.73l4 4l6-6V5H5v12.27zm3.308-1.578V6.308h.884v5.384zm3.038 0L13.192 9l2.154-2.692h1.085L14.277 9l2.154 2.692zm-8.038 0V8.558h2.5V7.192h-2.5v-.884h3.384v3.134h-2.5v1.366h2.5v.884zM9 14.616l-4 4V19h14v-6.384l-6 6zM5 19V5z"></svg:path>`,
})
export class MaterialSymbolsLightScoreOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
