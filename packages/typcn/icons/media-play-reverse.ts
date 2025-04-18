import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnMediaPlayReverseIcon],svg[typcn-media-play-reverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2c-.5 0-1 .2-1.4.6C10 8.1 6 12 6 12s4 3.9 6.6 6.4c.4.4.9.6 1.4.6"></svg:path>`,
})
export class TypcnMediaPlayReverseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
