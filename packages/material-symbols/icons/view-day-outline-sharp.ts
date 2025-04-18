import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewDayOutlineSharpIcon],svg[material-symbols-view-day-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-2h18v2zm0-4V8h18v8zm2-2h14v-4H5zM3 6V4h18v2zm2 8v-4z"></svg:path>`,
})
export class MaterialSymbolsViewDayOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
