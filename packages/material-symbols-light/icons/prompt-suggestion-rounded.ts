import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPromptSuggestionRoundedIcon],svg[material-symbols-light-prompt-suggestion-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.079 13.539H7.827q-1.595 0-2.71-1.092Q4 11.356 4 9.769t1.116-2.678T7.827 6q.213 0 .356.144t.144.357t-.144.356T7.827 7q-1.166 0-1.996.804T5 9.77t.83 1.965t1.997.802h10.252L14.589 9.1q-.152-.14-.159-.351t.153-.36q.146-.137.353-.137t.341.14l4.139 4.062q.242.247.242.577t-.243.573l-4.138 4.062q-.146.146-.343.14t-.345-.146q-.16-.146-.163-.354t.163-.354z"></svg:path>`,
})
export class MaterialSymbolsLightPromptSuggestionRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
