import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFeaturedPlayListSharpIcon],svg[material-symbols-light-featured-play-list-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 12.5h8v-1h-8zm0-3h8v-1h-8zM3 19V5h18v14z"></svg:path>`,
})
export class MaterialSymbolsLightFeaturedPlayListSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
