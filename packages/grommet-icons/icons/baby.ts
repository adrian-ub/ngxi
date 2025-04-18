import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsBabyIcon],svg[grommet-icons-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 15h4s-1 1.5-2 1.5s-2-1.5-2-1.5m2-9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 6l-4-3m0 6l3 2.5l-2.5 2.5M6 12l4-3m0 6l-2.5 2.75L10 20m0-11h4v3h-4z"></svg:path>`,
})
export class GrommetIconsBabyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
