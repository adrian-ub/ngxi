import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaRadarOutlineIcon],svg[cuida-radar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="radar-outline"><svg:g fill="currentColor" class="Vector"><svg:path fill-rule="evenodd" d="M3.924 17.897a10 10 0 0 1 .26-12.135A1 1 0 1 1 5.747 7.01a8 8 0 1 0 7.599-2.896a1 1 0 0 1 .336-1.971a10 10 0 1 1-9.758 15.754" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.191 15.588a6 6 0 0 1 .097-7.303a1 1 0 0 1 1.57 1.239a4 4 0 1 0 3.72-1.482a1 1 0 1 1 .29-1.979A6 6 0 1 1 7.19 15.59Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.293 3.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path><svg:path d="M11 12.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path></svg:g></svg:g>`,
})
export class CuidaRadarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
