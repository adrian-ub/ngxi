import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherTrendingUpIcon],svg[feather-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m23 6l-9.5 9.5l-5-5L1 18"></svg:path><svg:path d="M17 6h6v6"></svg:path></svg:g>`,
})
export class FeatherTrendingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
