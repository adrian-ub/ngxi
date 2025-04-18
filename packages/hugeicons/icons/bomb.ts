import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBombIcon],svg[hugeicons-bomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 15a7 7 0 1 1-14 0a7 7 0 0 1 14 0"></svg:path><svg:path d="m12 8.5l-.531-1.329c-.16-.397-.24-.596-.346-.761a2 2 0 0 0-1.288-.872C9.643 5.5 9.428 5.5 9 5.5s-.643 0-.835.038a2 2 0 0 0-1.288.872c-.107.165-.186.364-.345.761L6 8.5m16-1L20.5 6m0 0L19 4.5M20.5 6L19 7.5M20.5 6L22 4.5M17 6c-3 0-2.59-2.56-5.14-3.733C9.62 1.237 8.77 3.407 9.052 5"></svg:path></svg:g>`,
})
export class HugeiconsBombIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
