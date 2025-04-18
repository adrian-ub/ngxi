import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwitchVideoOutlineSharpIcon],svg[material-symbols-light-switch-video-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.98 14.808l.709-.708l-1.6-1.6h6.784l-1.6 1.6l.708.708L15.788 12l-2.807-2.808l-.708.708l1.6 1.6H7.089l1.6-1.6l-.708-.708L5.173 12zM3.48 19V5h14v6.27l3.04-3.04v7.54l-3.04-3.04V19zm1-1h12V6h-12zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightSwitchVideoOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
