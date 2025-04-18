import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCameraIcon],svg[tdesign-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.882 2h8.236l1.5 3H23v16H1V5h5.382zm1.236 2l-1.5 3H3v12h18V7h-4.618l-1.5-3zM12 9.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"></svg:path>`,
})
export class TdesignCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
