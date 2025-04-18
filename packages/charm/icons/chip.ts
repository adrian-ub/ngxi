import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmChipIcon],svg[charm-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 2.75h10.5v10.5H2.75z"></svg:path><svg:path d="M6.25 6.25h3.5v3.5h-3.5zm-4 4h-1m1-4.5h-1m13.5 4.5h-1m1-4.5h-1m-3.5 8v1m-4.5-1v1m4.5-13.5v1m-4.5-1v1"></svg:path></svg:g>`,
})
export class CharmChipIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
