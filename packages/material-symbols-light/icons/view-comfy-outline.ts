import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewComfyOutlineIcon],svg[material-symbols-light-view-comfy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm17-7.5V6H4v5.5zM9.385 18H20v-5.5H9.385zM4 18h4.385v-5.5H4z"></svg:path>`,
})
export class MaterialSymbolsLightViewComfyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
