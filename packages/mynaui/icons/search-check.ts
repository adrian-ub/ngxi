import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchCheckIcon],svg[mynaui-search-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m9.75 11.742l1.039 1.181c.095.109.267.1.351-.016L13.25 10"></svg:path><svg:path d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"></svg:path></svg:g>`,
})
export class MynauiSearchCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
