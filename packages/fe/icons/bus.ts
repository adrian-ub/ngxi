import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feBusIcon],svg[fe-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 19H8a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 1 1-4 0m1-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2M7 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2M6 5v6h12V5z"></svg:path>`,
})
export class FeBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
