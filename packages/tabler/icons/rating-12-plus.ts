import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRating12PlusIcon],svg[tabler-rating-12-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m4 3V9m8.5 3h3M17 10.5v3"></svg:path><svg:path d="M10 10.5a1.5 1.5 0 0 1 3 0c0 .443-.313.989-.612 1.393L10 15h3"></svg:path></svg:g>`,
})
export class TablerRating12PlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
