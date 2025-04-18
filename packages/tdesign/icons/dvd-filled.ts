import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDvdFilledIcon],svg[tdesign-dvd-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path><svg:path fill="currentColor" d="M22 2v20H2V2zM12 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12"></svg:path>`,
})
export class TdesignDvdFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
