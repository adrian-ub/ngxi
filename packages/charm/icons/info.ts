import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmInfoIcon],svg[charm-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="8" cy="8" r="6.25"></svg:circle><svg:path d="M8 11.25v-3.5"></svg:path></svg:g>`,
})
export class CharmInfoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
