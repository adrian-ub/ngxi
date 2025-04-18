import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCopyleftIcon],svg[charm-copyleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="8" cy="8" r="6.25"></svg:circle><svg:path d="M6 6.75s.75-1 2-1s2.25 1 2.25 2.25s-1 2.25-2.25 2.25s-2-1-2-1"></svg:path></svg:g>`,
})
export class CharmCopyleftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
