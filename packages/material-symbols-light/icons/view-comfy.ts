import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewComfyIcon],svg[material-symbols-light-view-comfy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11.5V5h18v6.5zM9.385 19v-6.5H21V19zM3 19v-6.5h5.385V19z"></svg:path>`,
})
export class MaterialSymbolsLightViewComfyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
