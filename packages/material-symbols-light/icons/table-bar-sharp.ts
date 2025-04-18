import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableBarSharpIcon],svg[material-symbols-light-table-bar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.73 19.02l1.616-4H11.5v-4.814q-3.421-.067-5.74-.856T3.443 7.5q0-1.142 2.483-1.927Q8.408 4.789 12 4.789q3.598 0 6.078.784q2.48.785 2.48 1.927q0 1.08-2.328 1.86q-2.328.779-5.73.846v4.813h3.154l1.615 4h-1.038l-1.2-3H8.969l-1.2 3z"></svg:path>`,
})
export class MaterialSymbolsLightTableBarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
