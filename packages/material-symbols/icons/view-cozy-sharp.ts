import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewCozySharpIcon],svg[material-symbols-view-cozy-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10.5V3h7.5v7.5zM3 21v-7.5h7.5V21zm10.5-10.5V3H21v7.5zm0 10.5v-7.5H21V21z"></svg:path>`,
})
export class MaterialSymbolsViewCozySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
