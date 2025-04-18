import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsMoreHorizontalIcon],svg[akar-icons-more-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="4" cy="12" r="1"></svg:circle><svg:circle cx="12" cy="12" r="1"></svg:circle><svg:circle cx="20" cy="12" r="1"></svg:circle></svg:g>`,
})
export class AkarIconsMoreHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
