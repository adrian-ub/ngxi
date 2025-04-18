import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextIndentMoreIcon],svg[hugeicons-text-indent-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4.5h5m-5 5h3m-3 5h5m-5 5h3M11 3v18M4 8.5l1.542 1.242C6.847 10.794 7.5 11.32 7.5 12s-.653 1.206-1.958 2.258L4 15.5" color="currentColor"></svg:path>`,
})
export class HugeiconsTextIndentMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
