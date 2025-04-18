import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignScreencastFilledIcon],svg[tdesign-screencast-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h22v17h-5.965L12 13.964L6.965 19H1z"></svg:path><svg:path fill="currentColor" d="M17.207 22H6.793L12 16.793z"></svg:path>`,
})
export class TdesignScreencastFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
