import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaLinkOutlineIcon],svg[cuida-link-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="link-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M2 12.5A5.5 5.5 0 0 1 7.5 7h2.25a1 1 0 1 1 0 2H7.5a3.5 3.5 0 1 0 0 7h2.25a1 1 0 1 1 0 2H7.5A5.5 5.5 0 0 1 2 12.5M13.25 8a1 1 0 0 1 1-1h2.25a5.5 5.5 0 1 1 0 11h-2.25a1 1 0 1 1 0-2h2.25a3.5 3.5 0 1 0 0-7h-2.25a1 1 0 0 1-1-1"></svg:path><svg:path d="M7.4 12.56a1 1 0 0 1 1-1h7.2a1 1 0 0 1 0 2H8.4a1 1 0 0 1-1-1"></svg:path></svg:g></svg:g>`,
})
export class CuidaLinkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
