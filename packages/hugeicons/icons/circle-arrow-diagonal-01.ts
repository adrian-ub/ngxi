import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowDiagonal01Icon],svg[hugeicons-circle-arrow-diagonal-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8.242 15.758l7.516-7.516m-7.516 7.516c.421.421 2.257.158 2.818.188m-2.818-.188c-.421-.421-.158-2.257-.188-2.818m7.704-4.698c.421.421.158 2.257.188 2.818m-.188-2.818c-.421-.421-2.257-.158-2.818-.188"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class HugeiconsCircleArrowDiagonal01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
