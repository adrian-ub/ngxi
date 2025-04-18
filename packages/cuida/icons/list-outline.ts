import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaListOutlineIcon],svg[cuida-list-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="list-outline"><svg:g fill="currentColor" class="Vector"><svg:path fill-rule="evenodd" d="M7 7a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M6 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g></svg:g>`,
})
export class CuidaListOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
