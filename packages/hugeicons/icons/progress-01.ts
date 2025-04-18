import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProgress01Icon],svg[hugeicons-progress-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23.063c-5.93 0-10.75-4.82-10.75-10.75S6.07 1.563 12 1.563s10.75 4.82 10.75 10.75s-4.82 10.75-10.75 10.75m0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25s-4.15-9.25-9.25-9.25" color="currentColor"></svg:path>`,
})
export class HugeiconsProgress01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
