import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewComfyAltOutlineIcon],svg[material-symbols-light-view-comfy-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10V3h7v7zm1-1h5V4H4zM3 21v-7h7v7zm1-1h5v-5H4zm10-10V3h7v7zm1-1h5V4h-5zm-1 12v-7h7v7zm1-1h5v-5h-5zm0-5"></svg:path>`,
})
export class MaterialSymbolsLightViewComfyAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
