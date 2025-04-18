import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggScrollHIcon],svg[gg-scroll-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.182 9.172L5.768 7.757L1.525 12l4.243 4.243l1.414-1.415L4.353 12zm9.636 5.656l1.414 1.415L22.475 12l-4.243-4.243l-1.414 1.415L19.646 12z"></svg:path><svg:path fill-rule="evenodd" d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgScrollHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
