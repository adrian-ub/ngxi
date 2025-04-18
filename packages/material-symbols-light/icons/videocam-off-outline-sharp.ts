import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVideocamOffOutlineSharpIcon],svg[material-symbols-light-videocam-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.577 15.77l-3.039-3.04v2.118l-1-1V6H8.691l-1-1h9.848v6.27l3.038-3.04zm-1.18 5.196L2.418 3.988l.708-.708l16.977 16.977zM4.884 5.037L5.845 6H4.54v12h12v-1.308l.961.962V19H3.539V5.039z"></svg:path>`,
})
export class MaterialSymbolsLightVideocamOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
