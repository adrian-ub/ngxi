import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoleculesIcon],svg[hugeicons-molecules-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="13" r="4"></svg:circle><svg:circle cx="12" cy="4" r="2"></svg:circle><svg:circle cx="4" cy="20" r="2"></svg:circle><svg:circle cx="20" cy="20" r="2"></svg:circle><svg:path d="M12 9V6m6.5 12.5L15 16m-9.5 2.5L9 16"></svg:path></svg:g>`,
})
export class HugeiconsMoleculesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
