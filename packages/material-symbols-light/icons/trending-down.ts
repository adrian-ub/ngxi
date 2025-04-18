import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTrendingDownIcon],svg[material-symbols-light-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17.096v-1h3.33l-6.026-5.938l-4 4L3 7.804l.708-.708l5.596 5.596l4-4L20 15.39v-3.293h1v5z"></svg:path>`,
})
export class MaterialSymbolsLightTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
