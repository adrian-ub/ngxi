import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumpadIcon],svg[ph-numpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64 32a16 16 0 1 0-16-16a16 16 0 0 0 16 16M64 88a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16M64 144a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0 56a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64-56a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhNumpadIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
