import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBrandfetchIcon],svg[hugeicons-brandfetch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 6.857c5.5-4.431 14-3.318 14 .671C19 10.567 11.5 12 11.5 12s6-.306 6 2.451c0 4.597-9.5 3.412-9.5 3.412"></svg:path><svg:path d="M9 8.5C8.333 11.167 7 16 7 20"></svg:path></svg:g>`,
})
export class HugeiconsBrandfetchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
