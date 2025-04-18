import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceBarIcon],svg[guidance-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10 19v4.5m0-4.5c0-4 3.167-9.806 7.063-13.053L18.5 4.75V4.5h-4.972M10 19c0-4-3.167-9.806-7.063-13.053L1.5 4.75V4.5h12.028M10 23.5H5m5 0h5m-9.5-15h9m3.5 1a4.5 4.5 0 1 0-4.472-5"></svg:path>`,
})
export class GuidanceBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
