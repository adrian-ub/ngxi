import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBottomRightClickSharpIcon],svg[material-symbols-light-bottom-right-click-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.98 20v-1H19V4.02h1V20zM15 16.5q-.633 0-1.066-.434Q13.5 15.633 13.5 15t.434-1.066T15 13.5t1.066.434q.434.433.434 1.066t-.434 1.066q-.433.434-1.066.434M6 12v-1h4.292l-6.08-6.1l.688-.689l6.1 6.081V6h1v6z"></svg:path>`,
})
export class MaterialSymbolsLightBottomRightClickSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
