import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumAlignRightIcon],svg[circum-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.922 3.548v16.9a.5.5 0 0 0 1 0v-16.9a.5.5 0 0 0-1 0M16.419 11.5H5.578a2.5 2.5 0 0 1-2.5-2.5V6.565a2.5 2.5 0 0 1 2.5-2.5h10.841a2.5 2.5 0 0 1 2.5 2.5V9a2.5 2.5 0 0 1-2.5 2.5M5.578 5.065a1.5 1.5 0 0 0-1.5 1.5V9a1.5 1.5 0 0 0 1.5 1.5h10.841a1.5 1.5 0 0 0 1.5-1.5V6.565a1.5 1.5 0 0 0-1.5-1.5Zm10.841 14.873H10.55a2.5 2.5 0 0 1-2.5-2.5V15a2.5 2.5 0 0 1 2.5-2.5h5.869a2.5 2.5 0 0 1 2.5 2.5v2.436a2.5 2.5 0 0 1-2.5 2.502M10.55 13.5a1.5 1.5 0 0 0-1.5 1.5v2.436a1.5 1.5 0 0 0 1.5 1.5h5.869a1.5 1.5 0 0 0 1.5-1.5V15a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path>`,
})
export class CircumAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
