import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPositionFront20RegularIcon],svg[fluent-text-position-front-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm3 8h1v2.5a.5.5 0 0 1-1 0zm7 0h-1v2.5a.5.5 0 0 0 1 0zm3-2a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1zM10 5a3.5 3.5 0 0 1 3.465 3H12.45a2.5 2.5 0 0 0-4.9 0H6.535A3.5 3.5 0 0 1 10 5M3.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentTextPositionFront20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
