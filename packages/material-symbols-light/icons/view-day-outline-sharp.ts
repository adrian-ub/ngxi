import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewDayOutlineSharpIcon],svg[material-symbols-light-view-day-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18.77v-1h16v1zM4 15V9h16v6zm1-1h14v-4H5zM4 6.23v-1h16v1zM5 14v-4z"></svg:path>`,
})
export class MaterialSymbolsLightViewDayOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
