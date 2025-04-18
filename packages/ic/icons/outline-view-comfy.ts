import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineViewComfyIcon],svg[ic-outline-view-comfy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v16h20V4zm2 2h16v5H4zm0 12v-5h4v5zm6 0v-5h10v5z"></svg:path>`,
})
export class IcOutlineViewComfyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
