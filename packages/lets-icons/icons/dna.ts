import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDnaIcon],svg[lets-icons-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path stroke-linecap="round" d="M19 3s0 9-7 9s-7 9-7 9"></svg:path><svg:path stroke-linecap="round" d="M5 3s0 9 7 9s7 9 7 9M18 6H6m12 12H6"></svg:path><svg:path d="M17 15H7"></svg:path><svg:path stroke-linecap="round" d="M17 9H7"></svg:path></svg:g>`,
})
export class LetsIconsDnaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
