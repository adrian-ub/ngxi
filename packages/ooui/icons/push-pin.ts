import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiPushPinIcon],svg[ooui-push-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8V2a2 2 0 0 0 2-2H5a2 2 0 0 0 2 2v6H6a2 2 0 0 0-2 2v1h5v5l1 4l1-4v-5h5v-1a2 2 0 0 0-2-2z"></svg:path>`,
})
export class OouiPushPinIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
