import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaBriefcaseOutlineIcon],svg[cuida-briefcase-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="briefcase-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M5 7h14a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z"></svg:path><svg:path d="M20 13H3v-2h17zM7 6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0V6H9v2a1 1 0 0 1-2 0z"></svg:path></svg:g></svg:g>`,
})
export class CuidaBriefcaseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
