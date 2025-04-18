import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilGrabHandleOffIcon],svg[pepicons-pencil-grab-handle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2.5 7a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilGrabHandleOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
