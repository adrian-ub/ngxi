import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundBoltIcon],svg[ic-round-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.67 21c-.35 0-.62-.31-.57-.66L11 14H7.5c-.88 0-.33-.75-.31-.78c1.26-2.23 3.15-5.53 5.65-9.93a.577.577 0 0 1 1.07.37l-.9 6.34h3.51c.4 0 .62.19.4.66c-3.29 5.74-5.2 9.09-5.75 10.05c-.1.18-.29.29-.5.29"></svg:path>`,
})
export class IcRoundBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
