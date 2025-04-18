import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteOrdoredListSolidIcon],svg[flowbite-ordored-list-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 3.1c.3.2.5.6.5.9v5h1a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2h1V5.6l-.6.3A1 1 0 0 1 3.6 4l2-1a1 1 0 0 1 1 0ZM11 6c0-.6.4-1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m0 6c0-.6.4-1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m-4.6 3A1 1 0 0 0 5 16a1 1 0 0 1-2 0a3 3 0 1 1 5 2.3L7 19h2a1 1 0 1 1 0 2H4a1 1 0 0 1-.6-1.8l3.3-2.5a1 1 0 0 0-.3-1.6Zm4.6 3c0-.6.4-1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteOrdoredListSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
