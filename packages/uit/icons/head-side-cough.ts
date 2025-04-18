import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitHeadSideCoughIcon],svg[uit-head-side-cough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20.4c-.3 0-.6.3-.6.6s.3.6.6.6s.6-.3.6-.6s-.3-.6-.6-.6M23 9c0-3.8-3.1-6.9-6.9-7S9.1 5 9 8.9l-2.1 4.4v.2c0 .3.2.5.5.5H9v2c0 1.1.9 2 2 2h1v2.5c0 .3.2.5.5.5s.5-.2.5-.5V18h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H11c-.6 0-1-.4-1-1v-2.5c0-.3-.2-.5-.5-.5H8.2L10 9.2V9c0-3.3 2.6-6 5.9-6s6 2.6 6.1 5.9l-2 7.4v.2l1 4c.1.2.3.4.5.4h.1c.3-.1.4-.3.4-.6l-1-3.9zc0 .1 0 0 0 0M2 17.4c-.3 0-.6.3-.6.6s.3.6.6.6s.6-.3.6-.6s-.3-.6-.6-.6m4-1c-.3 0-.6.3-.6.6s.3.6.6.6s.6-.3.6-.6s-.3-.6-.6-.6"></svg:path>`,
})
export class UitHeadSideCoughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
