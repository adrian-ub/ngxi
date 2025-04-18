import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpViewComfyAltIcon],svg[ic-sharp-view-comfy-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v16h20V4zm9 13H7v-4h4zm0-6H7V7h4zm6 6h-4v-4h4zm0-6h-4V7h4z"></svg:path>`,
})
export class IcSharpViewComfyAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
