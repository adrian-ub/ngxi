import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCandyIcon],svg[charm-candy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="8" cy="8" r="3.25"></svg:circle><svg:path d="M7.25 11.25c0 1-.5 2.5-1.5 3c-.75 0-1.5-1-2-2c-1-.5-2-1.5-2-2c.5-1 2-1.5 3-1.5m4-4c0-1 .5-2.5 1.5-3c.75 0 1.5 1 2 2c1 .5 2 1.5 2 2c-.5 1-2 1.5-3 1.5"></svg:path></svg:g>`,
})
export class CharmCandyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
