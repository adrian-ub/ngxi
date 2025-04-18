import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPictureInPictureSmallSharpIcon],svg[material-symbols-light-picture-in-picture-small-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-1h17V5h1v14zm6.923-3.384V9.923h7.693v5.693z"></svg:path>`,
})
export class MaterialSymbolsLightPictureInPictureSmallSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
