import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilDownLeftCircleFilledIcon],svg[pepicons-pencil-down-left-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilDownLeftCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.354 19.354a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L6.707 15l3.647 3.646a.5.5 0 0 1 0 .708"></svg:path><svg:path d="M15.75 14.5c.728 0 1.427-.291 1.943-.81s.807-1.226.807-1.963V6a.5.5 0 0 1 1 0v5.727c0 1-.394 1.959-1.097 2.667A3.74 3.74 0 0 1 15.75 15.5H6a.5.5 0 0 1 0-1z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilDownLeftCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilDownLeftCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
