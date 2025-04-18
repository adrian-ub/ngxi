import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilMouseOutlineIcon],svg[basil-mouse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.053 2.407a6.75 6.75 0 0 1 5.697 6.667v5.852a6.75 6.75 0 0 1-13.5 0V9.074a6.75 6.75 0 0 1 7.803-6.667m4.197 6.667a5.25 5.25 0 0 0-4.5-5.196V9.25h4.5zm-6 .176h-4.5v-.176a5.25 5.25 0 0 1 4.5-5.196zm-4.5 5.676V10.75h10.5v4.176a5.25 5.25 0 0 1-10.5 0" clip-rule="evenodd"></svg:path>`,
})
export class BasilMouseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
