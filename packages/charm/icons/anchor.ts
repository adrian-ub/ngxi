import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmAnchorIcon],svg[charm-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 5.75V14M3.25 7.75h-1.5c0 4 2.5 6.5 6.25 6.5s6.25-2.5 6.25-6.5h-1.5"></svg:path><svg:circle cx="8" cy="3.5" r="1.75"></svg:circle></svg:g>`,
})
export class CharmAnchorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
