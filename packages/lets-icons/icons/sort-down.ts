import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSortDownIcon],svg[lets-icons-sort-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M5 7h8m-8 5h6m-6 5h4"></svg:path><svg:path d="m19 18l3-3m-3 3l-3-3m3 3V6"></svg:path></svg:g>`,
})
export class LetsIconsSortDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
