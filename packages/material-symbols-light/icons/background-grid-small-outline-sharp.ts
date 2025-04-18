import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBackgroundGridSmallOutlineSharpIcon],svg[material-symbols-light-background-grid-small-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h2.75v-2.75H5zm3.75 0h2.75v-2.75H8.75zm3.75 0h2.75v-2.75H12.5zm3.75 0H19v-2.75h-2.75zM5 7.75h2.75V5H5zm0 3.75h2.75V8.75H5zm0 3.75h2.75V12.5H5zm3.75-7.5h2.75V5H8.75zm0 3.75h2.75V8.75H8.75zm0 3.75h2.75V12.5H8.75zm3.75-7.5h2.75V5H12.5zm0 3.75h2.75V8.75H12.5zm0 3.75h2.75V12.5H12.5zm3.75-7.5H19V5h-2.75zm0 3.75H19V8.75h-2.75zm0 3.75H19V12.5h-2.75zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightBackgroundGridSmallOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
