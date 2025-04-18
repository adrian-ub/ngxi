import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggOverflowIcon],svg[gg-overflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22 11a10 10 0 0 1-20 0z" opacity=".2"></svg:path><svg:path d="M20 11a8 8 0 0 1-16 0z" opacity=".3"></svg:path><svg:path d="M20 11a8 8 0 0 0-16 0z"></svg:path></svg:g>`,
})
export class GgOverflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
