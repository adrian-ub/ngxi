import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNoFoodSharpIcon],svg[material-symbols-no-food-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.475 23.3l-8.3-8.3H1q0-3.025 2.338-4.512T8.5 9q.125 0 .275.013t.275.012v2.825L.675 3.5L2.1 2.075l19.8 19.8zM1 19v-2h15v2zm0 4v-2h15v2zm20.625-4.25L11.45 8.6L11 5h5V1h2v4h5z"></svg:path>`,
})
export class MaterialSymbolsNoFoodSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
