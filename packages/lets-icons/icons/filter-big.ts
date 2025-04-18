import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFilterBigIcon],svg[lets-icons-filter-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M10 8h10M4 16h10"></svg:path><svg:circle cx="7" cy="8" r="3" transform="rotate(90 7 8)"></svg:circle><svg:circle cx="17" cy="16" r="3" transform="rotate(90 17 16)"></svg:circle></svg:g>`,
})
export class LetsIconsFilterBigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
