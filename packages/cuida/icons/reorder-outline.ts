import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaReorderOutlineIcon],svg[cuida-reorder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="reorder-outline"><svg:path fill="currentColor" d="M9.5 6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5-15a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3" class="Vector"></svg:path></svg:g>`,
})
export class CuidaReorderOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
