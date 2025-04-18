import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmSquareTickIcon],svg[charm-square-tick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.25 2.75h-7.5v10.5h10.5v-3.5"></svg:path><svg:path d="m5.75 7.75l2.5 2.5l6-6.5"></svg:path></svg:g>`,
})
export class CharmSquareTickIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
