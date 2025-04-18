import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShuffleOnSharpIcon],svg[material-symbols-light-shuffle-on-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V2h20v20zm12.23-3H19v-4.712h-1v2.954l-3.477-3.476l-.713.713L17.33 18h-3.1zm-8.522 0L18 6.708v3.004h1V5h-4.77v1h3.062L5 18.292zm3.678-8.925l.689-.688L5.689 5L5 5.689z"></svg:path>`,
})
export class MaterialSymbolsLightShuffleOnSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
