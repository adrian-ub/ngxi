import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBoneFilledIcon],svg[tdesign-bone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 1a3.5 3.5 0 0 0-3.177 4.97L5.97 14.323a3.5 3.5 0 1 0-2.735 6.441a3.5 3.5 0 1 0 6.442-2.734l8.353-8.353a3.5 3.5 0 1 0 2.734-6.441A3.5 3.5 0 0 0 17.5 1"></svg:path>`,
})
export class TdesignBoneFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
