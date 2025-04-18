import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBoltIcon],svg[la-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6v9l4 1l-3.898 10H16v-8.031l-4-1L15.898 6zm2-2h-3.512l-.472 1.328l-3.903 10.973l-.734 2.074l2.137.535l2.484.621V28h3.469l.496-1.273l3.898-10l.825-2.118L18 13.438z"></svg:path>`,
})
export class LaBoltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
