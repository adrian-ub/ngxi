import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMapsCircle02Icon],svg[hugeicons-maps-circle-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.5 9.5h.009M14.5 6C16.394 6 18 7.613 18 9.57c0 1.989-1.632 3.384-3.14 4.333a.72.72 0 0 1-.72 0C12.635 12.945 11 11.565 11 9.57C11 7.613 12.606 6 14.5 6"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M9 15l-4 4m10 2L3 9"></svg:path></svg:g>`,
})
export class HugeiconsMapsCircle02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
