import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riListIndefiniteIcon],svg[ri-list-indefinite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4h8v2h-8zm0 7h8v2h-8zm0 7h8v2h-8zm-6.5 1a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 2a4 4 0 1 0 0-8a4 4 0 0 0 0 8M5 6v3h3V6zM3 4h7v7H3z"></svg:path>`,
})
export class RiListIndefiniteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
