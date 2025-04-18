import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCamera1FilledIcon],svg[tdesign-camera-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 10a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0"></svg:path><svg:path fill="currentColor" d="M3 10c0 3.476 1.97 6.49 4.852 7.989L7.195 21H5v2h14v-2h-2.195l-.657-3.011A9 9 0 1 0 3 10m6.74 8.714a9.06 9.06 0 0 0 4.52 0L14.757 21H9.242zM7.5 10a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0"></svg:path>`,
})
export class TdesignCamera1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
