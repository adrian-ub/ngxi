import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherMessageCircleIcon],svg[feather-message-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 11.5a8.4 8.4 0 0 1-.9 3.8a8.5 8.5 0 0 1-7.6 4.7a8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8a8.5 8.5 0 0 1 4.7-7.6a8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"></svg:path>`,
})
export class FeatherMessageCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
