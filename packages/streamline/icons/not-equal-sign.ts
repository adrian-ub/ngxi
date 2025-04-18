import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNotEqualSignIcon],svg[streamline-not-equal-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.75 4.5h12.5m-12.5 5h12.5m-9.75 4l7-13"></svg:path>`,
})
export class StreamlineNotEqualSignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
