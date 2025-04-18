import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSdCardSharpIcon],svg[material-symbols-light-sd-card-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V8.423L10.423 3H19v18zm4.577-10.23h1V7.345h-1zm2.808 0h1V7.345h-1zm2.807 0h1V7.345h-1z"></svg:path>`,
})
export class MaterialSymbolsLightSdCardSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
