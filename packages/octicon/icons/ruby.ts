import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconRubyIcon],svg[octicon-ruby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 6l-5 5V4h3l2 2zm3 0l-8 8l-8-8l4-4h8l4 4zm-8 6.5L14.5 6l-3-3h-7l-3 3L8 12.5z" fill="currentColor"></svg:path>`,
})
export class OcticonRubyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
