import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewComfyAltOutlineIcon],svg[material-symbols-view-comfy-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10V2h8v8zm2-2h4V4H4zM2 22v-8h8v8zm2-2h4v-4H4zm10-10V2h8v8zm2-2h4V4h-4zm-2 14v-8h8v8zm2-2h4v-4h-4zm0-4"></svg:path>`,
})
export class MaterialSymbolsViewComfyAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
