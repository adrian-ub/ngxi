import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCameraOutlineIcon],svg[lsicon-camera-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="square"><svg:path d="M10.5 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path d="M14.5 12.5h-13V4h3.714l.929-1.5h3.714l.929 1.5H14.5z"></svg:path></svg:g>`,
})
export class LsiconCameraOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
