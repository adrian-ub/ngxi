import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconReply24Icon],svg[octicon-reply-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.53 5.03a.75.75 0 1 0-1.06-1.06l-6.25 6.25a.75.75 0 0 0 0 1.06l6.25 6.25a.75.75 0 1 0 1.06-1.06L5.56 11.5H17a3.25 3.25 0 0 1 3.25 3.248v4.502a.75.75 0 0 0 1.5 0v-4.502A4.75 4.75 0 0 0 17 10H5.56z"></svg:path>`,
})
export class OcticonReply24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
