import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewComfyAltIcon],svg[material-symbols-light-view-comfy-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10V3h7v7zm0 11v-7h7v7zm11-11V3h7v7zm0 11v-7h7v7z"></svg:path>`,
})
export class MaterialSymbolsLightViewComfyAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
