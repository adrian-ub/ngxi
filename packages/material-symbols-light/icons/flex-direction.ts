import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlexDirectionIcon],svg[material-symbols-light-flex-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-5.808h7.846V19zm0-8.192V5h7.846v5.808zm1-1h5.846V6H4zM16.942 19l-4.288-4.288l.688-.689l3.1 3.056V5h1v12.079l3.1-3.056l.689.689z"></svg:path>`,
})
export class MaterialSymbolsLightFlexDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
