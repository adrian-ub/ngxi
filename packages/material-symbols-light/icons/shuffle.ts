import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShuffleIcon],svg[material-symbols-light-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.23 19v-1h3.1l-3.52-3.521l.713-.713L18 17.242v-2.954h1V19zm-8.522 0L5 18.292L17.292 6h-3.061V5H19v4.712h-1V6.708zm3.678-8.925L5 5.689L5.689 5l4.386 4.387z"></svg:path>`,
})
export class MaterialSymbolsLightShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
