import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAodSharpIcon],svg[material-symbols-aod-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14.5V13h6v1.5zm-1-3V10h8v1.5zM5 23V1h14v22zm2-5h10V6H7z"></svg:path>`,
})
export class MaterialSymbolsAodSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
