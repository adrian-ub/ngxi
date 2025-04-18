import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmTentIcon],svg[charm-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.25 14.25L8 10l2.75 4.25"></svg:path><svg:path d="m9.75 1.75l-8 12.5h12.5l-8-12.5"></svg:path></svg:g>`,
})
export class CharmTentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
