import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumpadDuotoneIcon],svg[ph-numpad-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 48v152a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V48Z" opacity=".2"></svg:path><svg:path d="M80 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64 32a16 16 0 1 0-16-16a16 16 0 0 0 16 16M64 88a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16M64 144a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0 56a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64-56a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class PhNumpadDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
