import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRoundaboutRightSharpIcon],svg[material-symbols-light-roundabout-right-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.02 20v-5.477q-2.106-.12-3.563-1.622T3 9.269q0-2.211 1.539-3.74T8.289 4q2.128 0 3.64 1.447T13.562 9h5.518l-2.095-2.1l.708-.708L21 9.5l-3.308 3.308l-.713-.708l2.1-2.1h-6.514v-.692q0-1.785-1.246-3.046T8.29 5T5.252 6.252T4 9.269q0 1.785 1.271 3.031t3.056 1.246h.692V20z"></svg:path>`,
})
export class MaterialSymbolsLightRoundaboutRightSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
