import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconKebabVerticalIcon],svg[octicon-kebab-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0zm0 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0zM1.5 14a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z" fill="currentColor"></svg:path>`,
})
export class OcticonKebabVerticalIcon {
  readonly viewBox = input("0 0 3 16")
  readonly width = input("0.19em")
  readonly height = input("1em")
}
