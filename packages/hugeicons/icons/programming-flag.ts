import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProgrammingFlagIcon],svg[hugeicons-programming-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 7c0-1.886 0-2.828.586-3.414S6.114 3 8 3h7c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9s0 4.243-.879 5.121C19.243 15 17.828 15 15 15H4zm0 14V8"></svg:path><svg:path d="m16 7l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L16 11M9 7L7.773 8.057C7.258 8.502 7 8.724 7 9s.258.498.773.943L9 11m4.5-4l-2 4"></svg:path></svg:g>`,
})
export class HugeiconsProgrammingFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
