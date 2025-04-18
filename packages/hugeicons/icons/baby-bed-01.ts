import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBabyBed01Icon],svg[hugeicons-baby-bed-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7v8M8 7v8m8-8v8m4 5V6a2 2 0 0 1 2-2M4 20V6a2 2 0 0 0-2-2m2 3h16M4 15h16M4 18h16" color="currentColor"></svg:path>`,
})
export class HugeiconsBabyBed01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
