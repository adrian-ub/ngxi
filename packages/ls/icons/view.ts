import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsViewIcon],svg[ls-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M397.25 278c38 0 69 31 69 69s-31 68-69 68s-68-30-68-68s30-69 68-69m0-170c226 0 389 212 389 212c11 14 11 39 0 53c0 0-163 212-389 212s-389-212-389-212c-11-14-11-39 0-53c0 0 163-212 389-212m0 410c94 0 171-77 171-171s-77-171-171-171s-171 77-171 171s77 171 171 171"></svg:path>`,
})
export class LsViewIcon {
  readonly viewBox = input("0 0 795 614")
  readonly width = input("1.3em")
  readonly height = input("1em")
}
