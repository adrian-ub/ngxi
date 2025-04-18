import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlushedFaceIcon],svg[emojione-flushed-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#ff717f"><svg:circle cx="52.8" cy="37.1" r="8"></svg:circle><svg:circle cx="11.2" cy="37.1" r="8"></svg:circle></svg:g><svg:path fill="#917524" d="M54.6 20.6c-2.7-3.3-6.7-5.1-11-5.1c-.6 0-.7-2.2 0-2.2c4.9 0 9.5 2.1 12.7 5.9c.5.6-1.3 1.9-1.7 1.4m-34.3-5.2c-4.2 0-8.3 1.9-11 5.1c-.4.5-2.1-.8-1.7-1.4c3.1-3.8 7.8-5.9 12.7-5.9c.7 0 .6 2.2 0 2.2"></svg:path><svg:circle cx="32" cy="49.5" r="4.5" fill="#664e27"></svg:circle><svg:path fill="#fff" d="M29.5 29.1c0 5-4 9-9 9s-9-4-9-9s4-9 9-9s9 4.1 9 9"></svg:path><svg:circle cx="20.5" cy="29.1" r="4.5" fill="#664e27"></svg:circle><svg:path fill="#fff" d="M52.5 29.1c0 5-4 9-9 9s-9-4-9-9s4-9 9-9s9 4.1 9 9"></svg:path><svg:circle cx="43.5" cy="29.1" r="4.5" fill="#664e27"></svg:circle>`,
})
export class EmojioneFlushedFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
