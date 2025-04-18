import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextIndentIcon],svg[hugeicons-text-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 3h10M11 9h10M3 15h18M3 21h18M3 3l1.542 1.242C5.847 5.294 6.5 5.82 6.5 6.5s-.653 1.206-1.958 2.258L3 10" color="currentColor"></svg:path>`,
})
export class HugeiconsTextIndentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
