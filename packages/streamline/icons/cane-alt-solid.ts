import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCaneAltSolidIcon],svg[streamline-cane-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.469 2.5a1 1 0 0 0-1 1v.25a1.25 1.25 0 1 1-2.5 0V3.5a3.5 3.5 0 1 1 7 0v9.25a1.25 1.25 0 1 1-2.5 0V3.5a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCaneAltSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
