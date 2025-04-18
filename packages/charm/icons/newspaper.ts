import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmNewspaperIcon],svg[charm-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11.2 14.2h.5c1.5 0 2.5-1 2.5-2.5v-6h-3m-9.5-4h9.5v12.5h-7c-1.5 0-2.5-1-2.5-2.5V2.26zm3.05 9.5h3.5"></svg:path><svg:path d="M4.75 4.75h3.5v3.5h-3.5z"></svg:path></svg:g>`,
})
export class CharmNewspaperIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
