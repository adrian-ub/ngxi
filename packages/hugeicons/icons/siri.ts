import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSiriIcon],svg[hugeicons-siri-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M3 7.592C9 9.32 10.5 5 19 5"></svg:path><svg:path d="M2 12c9 0 11-6.501 16-7m0 14.88C12.719 21.145 6.444 12 2 12"></svg:path><svg:path d="M4 18c6.5 0 10.686-8 17-8"></svg:path></svg:g>`,
})
export class HugeiconsSiriIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
