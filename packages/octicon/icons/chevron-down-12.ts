import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconChevronDown12Icon],svg[octicon-chevron-down-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l2.7 2.7l2.7-2.7c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-3.2 3.2q-.3.3-.6.3"></svg:path>`,
})
export class OcticonChevronDown12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
