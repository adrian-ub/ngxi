import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilGrabHandleIcon],svg[pepicons-pencil-grab-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 7a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class PepiconsPencilGrabHandleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
