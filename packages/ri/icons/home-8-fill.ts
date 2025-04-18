import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHome8FillIcon],svg[ri-home-8-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3zM9 10v6h6v-6zm2 2h2v2h-2z"></svg:path>`,
})
export class RiHome8FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
