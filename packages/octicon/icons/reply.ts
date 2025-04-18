import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconReplyIcon],svg[octicon-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 3.5c3.92.44 8 3.125 8 10c-2.312-5.062-4.75-6-8-6V11L.5 5.5L6 0v3.5z" fill="currentColor"></svg:path>`,
})
export class OcticonReplyIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
