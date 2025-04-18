import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneSadButRelievedFaceIcon],svg[emojione-sad-but-relieved-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffdd67" d="M2 32c0 16.6 13.4 30 30 30s30-13.4 30-30S48.6 2 32 2S2 15.4 2 32"></svg:path><svg:path fill="#65b1ef" d="M47.7 37.6c0 8.6 11.7 8.6 11.7 0c0-6.3-5.8-12.4-5.8-12.4s-5.9 6.1-5.9 12.4"></svg:path><svg:g fill="#664e27"><svg:circle cx="38.5" cy="35" r="5"></svg:circle><svg:circle cx="15.5" cy="35" r="5"></svg:circle></svg:g><svg:path fill="#917524" d="M20.6 19.9c-3.2 2.7-7.5 3.9-11.7 3.1c-.6-.1-1.1 2-.4 2.2c4.8.9 9.8-.5 13.5-3.6c.5-.5-1-2.1-1.4-1.7m24.5 3c-4.2.7-8.5-.4-11.7-3.1c-.4-.4-2 1.2-1.4 1.7c3.7 3.2 8.7 4.5 13.5 3.6c.7-.2.2-2.3-.4-2.2"></svg:path><svg:path fill="#664e27" d="M38.1 47.3c-5.8-1.5-12-.4-16.9 3c-1.2.9 1.1 4 2.3 3.2c3.2-2.3 8.4-3.8 13.7-2.4c1.3.3 2.4-3.3.9-3.8"></svg:path>`,
})
export class EmojioneSadButRelievedFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
