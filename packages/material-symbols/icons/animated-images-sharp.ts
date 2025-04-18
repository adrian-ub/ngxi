import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAnimatedImagesSharpIcon],svg[material-symbols-animated-images-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.5l6-4l-6-4zm-8.3 8.625L1.85 7.2L5 6.85V19h13.3l.125 1.325zM7 17V2h15v15z"></svg:path>`,
})
export class MaterialSymbolsAnimatedImagesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
