import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoveLeftIcon],svg[hugeicons-move-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 22 9)"></svg:circle><svg:path d="M2 12h10M2 12c0 .562.438.99 1.314 1.844L4.971 15.5M2 12c0-.562.438-.99 1.314-1.844L4.97 8.5"></svg:path></svg:g>`,
})
export class HugeiconsMoveLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
