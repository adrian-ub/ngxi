import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDollar02Icon],svg[hugeicons-dollar-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.417 8.148C18.417 5.858 15.544 4 12 4S5.583 5.857 5.583 8.148s1.75 3.556 6.417 3.556s7 1.185 7 4.148S15.866 20 12 20s-7-1.857-7-4.148M12 2v20" color="currentColor"></svg:path>`,
})
export class HugeiconsDollar02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
