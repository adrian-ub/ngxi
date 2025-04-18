import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBubblesSharpIcon],svg[material-symbols-light-bubbles-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.723 8.4l4.162 4.156V9.619h1v4.65h-4.65v-1h2.961l-4.18-4.161zM18.577 19q-1.01 0-1.716-.707t-.707-1.716t.707-1.716t1.716-.707t1.716.707t.707 1.716t-.707 1.716t-1.716.707M3 19V5h18v6.73h-1V6H4v12h9.73v1z"></svg:path>`,
})
export class MaterialSymbolsLightBubblesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
