import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilGrabHandleCircleFilledIcon],svg[pepicons-pencil-grab-handle-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilGrabHandleCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" d="M5.5 10a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilGrabHandleCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilGrabHandleCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
