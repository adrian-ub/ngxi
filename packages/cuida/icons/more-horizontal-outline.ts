import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaMoreHorizontalOutlineIcon],svg[cuida-more-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="more-horizontal-outline"><svg:path fill="currentColor" d="M6 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m8 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m8 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" class="Vector"></svg:path></svg:g>`,
})
export class CuidaMoreHorizontalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
