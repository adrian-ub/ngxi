import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFilterBigAltIcon],svg[lets-icons-filter-big-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:circle cx="7" cy="7" r="3" transform="rotate(90 7 7)"></svg:circle><svg:path d="M9.5 5H18a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H9.5"></svg:path><svg:circle cx="3" cy="3" r="3" transform="matrix(0 1 1 0 14 14)"></svg:circle><svg:path d="M14.5 15H6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h8.5"></svg:path></svg:g>`,
})
export class LetsIconsFilterBigAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
