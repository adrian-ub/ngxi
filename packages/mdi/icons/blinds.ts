import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBlindsIcon],svg[mdi-blinds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v7a1 1 0 0 1-1 1h-6v2.17c1.17.41 2 1.52 2 2.83a3 3 0 0 1-3 3a3 3 0 0 1-3-3c0-1.31.83-2.42 2-2.83V14H5a1 1 0 0 1-1-1V6H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m9 16a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiBlindsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
