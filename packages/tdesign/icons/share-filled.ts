import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShareFilledIcon],svg[tdesign-share-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 4.5a3.5 3.5 0 0 1-5.909 2.54l-7.186 4.148a3.5 3.5 0 0 1 0 1.624l7.186 4.149a3.5 3.5 0 1 1-.998 1.733l-7.189-4.15a3.5 3.5 0 1 1 0-5.087l7.19-4.151A3.5 3.5 0 1 1 21.5 4.5"></svg:path>`,
})
export class TdesignShareFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
