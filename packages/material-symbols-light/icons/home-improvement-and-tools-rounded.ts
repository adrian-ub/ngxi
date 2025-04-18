import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHomeImprovementAndToolsRoundedIcon],svg[material-symbols-light-home-improvement-and-tools-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.97 3h6.06q.318 0 .459.278q.14.278-.037.547L14 5.892V10.5h-4V5.892L8.548 3.825q-.177-.27-.036-.547Q8.652 3 8.969 3M10 11.5h4v3h-4zm0 4h4v2.406q0 .323-.13.628q-.132.305-.349.522l-.956.955q-.13.131-.267.184t-.298.053t-.298-.053t-.268-.184l-.955-.955q-.218-.218-.348-.522q-.131-.305-.131-.628z"></svg:path>`,
})
export class MaterialSymbolsLightHomeImprovementAndToolsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
