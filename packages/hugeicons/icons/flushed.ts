import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlushedIcon],svg[hugeicons-flushed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M10 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m7 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M9 16h6"></svg:path></svg:g>`,
})
export class HugeiconsFlushedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
