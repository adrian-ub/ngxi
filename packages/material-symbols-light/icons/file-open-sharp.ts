import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileOpenSharpIcon],svg[material-symbols-light-file-open-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.95 21.664l-3.45-3.45v2.955h-1V16.5h4.67v1h-2.982l3.45 3.45zM14 8h4l-4-4zM5 21V3h9.5L19 7.5v7h-3.5V21z"></svg:path>`,
})
export class MaterialSymbolsLightFileOpenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
