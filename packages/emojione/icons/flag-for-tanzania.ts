import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForTanzaniaIcon],svg[emojione-flag-for-tanzania-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#83bf4f" d="M17 6C6.3 12.2.9 23.9 2.2 35.3L49.8 7.9C40.5 1 27.7-.1 17 6"></svg:path><svg:path fill="#428bc1" d="M14.2 56.1c9.3 6.9 22.2 8 32.8 1.8c10.7-6.1 16.1-17.8 14.8-29.3z"></svg:path><svg:path fill="#3e4347" d="M58 17c-1.4-2.4-3.1-4.5-5-6.4L3 39.5q1.05 3.9 3 7.5c1.4 2.4 3.1 4.5 5 6.4l50-28.9q-.9-3.9-3-7.5"></svg:path><svg:path fill="#ffce31" d="M61.5 26.5c-.1-.7-.3-1.4-.5-2L11 53.4c.5.5 1 1 1.5 1.4c.5.5 1.1.9 1.7 1.3l47.6-27.5zm-10-17.3c-.5-.5-1.1-.9-1.7-1.3L2.2 35.3l.3 2.1c.1.7.3 1.4.5 2l50-28.8c-.5-.5-1-1-1.5-1.4"></svg:path>`,
})
export class EmojioneFlagForTanzaniaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
