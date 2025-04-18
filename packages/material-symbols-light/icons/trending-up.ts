import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTrendingUpIcon],svg[material-symbols-light-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.708 17.096L3 16.39l6.304-6.354l4 4l6.027-5.939H16v-1h5v5h-1V8.804L13.304 15.5l-4-4z"></svg:path>`,
})
export class MaterialSymbolsLightTrendingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
