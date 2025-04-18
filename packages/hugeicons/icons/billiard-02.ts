import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBilliard02Icon],svg[hugeicons-billiard-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 12c-.828 0-1.5.56-1.5 1.25s.672 1.25 1.5 1.25s1.5-.56 1.5-1.25S12.828 12 12 12m0 0c.828 0 1.5-.56 1.5-1.25S12.828 9.5 12 9.5s-1.5.56-1.5 1.25S11.172 12 12 12"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M19 12a7 7 0 1 1-14 0a7 7 0 0 1 14 0"></svg:path></svg:g>`,
})
export class HugeiconsBilliard02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
