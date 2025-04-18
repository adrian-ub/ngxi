import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBorgOutlineSharpIcon],svg[material-symbols-light-borg-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16.587V7.414l8-4.637l8 4.637v9.173l-8 4.636zm4.673-1.24V12.5H5v3.489l6.5 3.802v-4.445zm0-6.693H11.5V4.21L5 8.012V11.5h3.673zm1 5.692h4.635V9.673H9.673zm5.635 1H12.5v4.445l6.5-3.802V12.5h-3.692zm0-6.692V11.5H19V8.012L12.5 4.21v4.444z"></svg:path>`,
})
export class MaterialSymbolsLightBorgOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
