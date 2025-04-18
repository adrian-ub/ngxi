import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatNextLightIcon],svg[topcoat-next-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 38.32L28.609 21L11 3.68L13.72 1L34 21.01L13.72 41z"></svg:path>`,
})
export class TopcoatNextLightIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
