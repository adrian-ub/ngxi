import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmFileCodeIcon],svg[charm-file-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 7.75v-6h5.5l5 5v7.5h-2"></svg:path><svg:path d="M7.75 2.25v5h5.05M6.75 10.8l2 1.75l-2 1.75m-3-3.5l-2 1.75l2 1.75"></svg:path></svg:g>`,
})
export class CharmFileCodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
