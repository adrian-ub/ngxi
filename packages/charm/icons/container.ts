import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmContainerIcon],svg[charm-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m1.75 12.2l5.5 2l7-4.5v-6l-5.5-2l-7 4.5z"></svg:path><svg:path d="M10.8 6.25v5.5m-3.5-3.5v6m-5.5-8l5.5 2l7-4.5"></svg:path></svg:g>`,
})
export class CharmContainerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
