import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaMinusOutlineIcon],svg[cuida-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="minus-outline"><svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1" class="Vector" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CuidaMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
