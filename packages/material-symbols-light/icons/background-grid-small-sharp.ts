import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBackgroundGridSmallSharpIcon],svg[material-symbols-light-background-grid-small-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20h3.25v-3.25H4zm4.25 0h3.25v-3.25H8.25zm4.25 0h3.25v-3.25H12.5zm4.25 0H20v-3.25h-3.25zM4 7.25h3.25V4H4zm0 4.25h3.25V8.25H4zm0 4.25h3.25V12.5H4zm4.25-8.5h3.25V4H8.25zm0 4.25h3.25V8.25H8.25zm0 4.25h3.25V12.5H8.25zm4.25-8.5h3.25V4H12.5zm0 4.25h3.25V8.25H12.5zm0 4.25h3.25V12.5H12.5zm4.25-8.5H20V4h-3.25zm0 4.25H20V8.25h-3.25zm0 4.25H20V12.5h-3.25z"></svg:path>`,
})
export class MaterialSymbolsLightBackgroundGridSmallSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
