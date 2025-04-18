import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEqualSignIcon],svg[streamline-equal-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.75 4.5h12.5m-12.5 5h12.5"></svg:path>`,
})
export class StreamlineEqualSignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
