import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddChartOutlineSharpIcon],svg[material-symbols-add-chart-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17h2v-7H7zm4 0h2V7h-2zm4 0h2v-4h-2zM3 21V3h11v2H5v14h14v-9h2v11zM17 9V7h-2V5h2V3h2v2h2v2h-2v2zm-5 3"></svg:path>`,
})
export class MaterialSymbolsAddChartOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
