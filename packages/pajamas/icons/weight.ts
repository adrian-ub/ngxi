import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasWeightIcon],svg[pajamas-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 3.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M10.45 5a2.75 2.75 0 1 0-4.9 0H3.82a1 1 0 0 0-.98.804l-1.6 8A1 1 0 0 0 2.22 15h11.56a1 1 0 0 0 .98-1.196l-1.6-8A1 1 0 0 0 12.18 5zM8 6.5H4.23l-1.4 7h10.34l-1.4-7z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasWeightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
