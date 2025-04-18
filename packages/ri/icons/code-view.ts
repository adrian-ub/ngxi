import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCodeViewIcon],svg[ri-code-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.95 8.464l1.414-1.414l4.95 4.95l-4.95 4.95l-1.414-1.414L20.485 12zm-9.9 0L3.515 12l3.535 3.536l-1.414 1.414L.686 12l4.95-4.95z"></svg:path>`,
})
export class RiCodeViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
