import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoon01Icon],svg[hugeicons-moon-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.099 7.845a3.5 3.5 0 1 1-4.943-4.943m4.943 4.943A10 10 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2c1.483 0 2.89.323 4.155.901M21.1 7.845A10.04 10.04 0 0 0 16.155 2.9M10 8h.006M7 14h.006"></svg:path><svg:path d="M16 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class HugeiconsMoon01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
