import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLArrowDownLeftIcon],svg[mage-l-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m9.32 20.5l-5.21-5.21a1.214 1.214 0 0 1 0-1.724l5.21-5.209"></svg:path><svg:path d="M20.249 3.5v7.286a3.643 3.643 0 0 1-3.643 3.643H3.759"></svg:path></svg:g>`,
})
export class MageLArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
