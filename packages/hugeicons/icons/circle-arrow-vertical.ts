import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowVerticalIcon],svg[hugeicons-circle-arrow-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M12 17V7m0 10c.56 0 1.607-1.396 2-1.75M12 17c-.56 0-1.607-1.396-2-1.75M12 7c.56 0 1.607 1.396 2 1.75M12 7c-.56 0-1.607 1.396-2 1.75"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
