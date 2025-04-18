import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiCameraOutlinedIcon],svg[weui-camera-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.358 5.2H9.642l-2 3H3.2v10.6h17.6V8.2h-4.442zm.374-1.2a.5.5 0 0 1 .416.223L17 7h4a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4l1.852-2.777A.5.5 0 0 1 9.268 4zM12 15.8a2.8 2.8 0 1 0 0-5.6a2.8 2.8 0 0 0 0 5.6m0 1.2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class WeuiCameraOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
