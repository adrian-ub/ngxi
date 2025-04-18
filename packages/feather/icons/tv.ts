import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherTvIcon],svg[feather-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="15" x="2" y="7" rx="2" ry="2"></svg:rect><svg:path d="m17 2l-5 5l-5-5"></svg:path></svg:g>`,
})
export class FeatherTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
