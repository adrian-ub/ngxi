import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherBookIcon],svg[feather-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></svg:path><svg:path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2"></svg:path></svg:g>`,
})
export class FeatherBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
