import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForDjiboutiIcon],svg[emojione-flag-for-djibouti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#83bf4f" d="M11 32v21.4c5.4 5.3 12.8 8.6 21 8.6c16.6 0 30-13.4 30-30z"></svg:path><svg:path fill="#42ade2" d="M11 32h51C62 15.4 48.6 2 32 2c-8.2 0-15.6 3.3-21 8.6z"></svg:path><svg:path fill="#f9f9f9" d="M11 10.6C5.4 16 2 23.6 2 32s3.4 16 9 21.4L32.4 32z"></svg:path><svg:path fill="#c94747" d="m14 35.7l4.3 3.3l-1.6-5.3l4.3-3.5h-5.3L14 25l-1.6 5.2H7l4.3 3.5L9.7 39z"></svg:path>`,
})
export class EmojioneFlagForDjiboutiIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
