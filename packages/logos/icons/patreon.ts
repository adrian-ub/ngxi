import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPatreonIcon],svg[logos-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF424D" d="M45.136 0v246.35H0V0zm118.521 0C214.657 0 256 41.343 256 92.343s-41.343 92.343-92.343 92.343s-92.343-41.344-92.343-92.343S112.658 0 163.657 0"></svg:path>`,
})
export class LogosPatreonIcon {
  readonly viewBox = input("0 0 256 247")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
