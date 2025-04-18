import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMoleculeIcon],svg[lets-icons-molecule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m10 14l-3 3m3.5-6.5L6 6"></svg:path><svg:circle cx="18" cy="19" r="1" stroke="currentColor" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m14 14l4 5"></svg:path><svg:circle cx="19" cy="5" r="2" stroke="currentColor" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m17 7l-3 3"></svg:path><svg:circle cx="5.5" cy="5.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" stroke-width="2"></svg:circle></svg:g>`,
})
export class LetsIconsMoleculeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
