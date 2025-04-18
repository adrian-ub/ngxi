import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPanoramaVerticalSharpIcon],svg[material-symbols-light-panorama-vertical-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.014 20.989q.644-1.991 1.075-4.145t.43-4.855t-.43-4.856t-1.075-4.144H18.98q-.645 1.99-1.053 4.144q-.409 2.154-.409 4.856t.409 4.855t1.053 4.145z"></svg:path>`,
})
export class MaterialSymbolsLightPanoramaVerticalSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
