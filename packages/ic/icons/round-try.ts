import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundTryIcon],svg[ic-round-try-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6.43 9.57l-1.12 2.44a.5.5 0 0 1-.91 0l-1.12-2.44l-2.44-1.12a.5.5 0 0 1 0-.91l2.44-1.12l1.12-2.44a.5.5 0 0 1 .91 0l1.12 2.44l2.44 1.12a.5.5 0 0 1 0 .91z"></svg:path>`,
})
export class IcRoundTryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
