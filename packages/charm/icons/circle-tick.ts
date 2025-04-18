import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCircleTickIcon],svg[charm-circle-tick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"></svg:path><svg:path d="m5.75 7.75l2.5 2.5l6-6.5"></svg:path></svg:g>`,
})
export class CharmCircleTickIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
