import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixWebcamCancelledFilledIcon],svg[ix-webcam-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m72.837 72.837l362.667 362.667l-30.17 30.17a4768 4768 0 0 0-35.363-39.006H128V384h202.31a3766 3766 0 0 0-20.267-21.332H170.667c-70.692 0-128-57.308-128-128c0-36.866 15.585-70.092 40.526-93.448a25136 25136 0 0 0-40.526-38.213zm268.497 33.83c70.692 0 128 57.308 128 128c0 47.235-25.586 88.494-63.654 110.675l-89.326-89.328A63.9 63.9 0 0 0 320 234.667c0-35.346-28.653-64-64-64a63.9 63.9 0 0 0-21.347 3.647l-67.595-67.597q1.798-.05 3.609-.05zm-148.35 139.23l.027.162c4.814 26.794 26.305 47.8 53.345 51.886q-22.97-22.713-53.372-52.048"></svg:path>`,
})
export class IxWebcamCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
