import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGestureSelectSharpIcon],svg[material-symbols-gesture-select-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12v-2h2v2zm20 0v-2h2v2zM1 8V6h2v2zm20 0V6h2v2zM1 4V2h2v2zm4 8v-2h2v2zm12 0v-2h2v2zm4-8V2h2v2zM5 4V2h2v2zm4 0V2h2v2zm4 0V2h2v2zm4 0V2h2v2zm-5.175 19q-.6 0-1.15-.225t-.975-.65L4.6 17l1.6-1.625l2.8.8V7h2v8h1v-4h2v4h1v-3h2v3h1v-1h2v5q0 1.65-1.175 2.825T16 23z"></svg:path>`,
})
export class MaterialSymbolsGestureSelectSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
