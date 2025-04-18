import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSortListIcon],svg[lets-icons-sort-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M5 7h7m-7 5h7m-7 5h7"></svg:path><svg:path d="m19 20l3-3m-3 3l-3-3m3 3V4m0 0l-3 3m3-3l3 3"></svg:path></svg:g>`,
})
export class LetsIconsSortListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
