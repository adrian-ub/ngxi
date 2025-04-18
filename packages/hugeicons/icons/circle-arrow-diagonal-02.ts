import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowDiagonal02Icon],svg[hugeicons-circle-arrow-diagonal-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M15.758 15.758L8.242 8.242m7.516 7.516c-.421.421-2.257.158-2.818.188m2.818-.188c.421-.421.158-2.257.188-2.818M8.242 8.242c-.421.421-.158 2.257-.188 2.818m.188-2.818c.421-.421 2.257-.158 2.818-.188"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowDiagonal02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
