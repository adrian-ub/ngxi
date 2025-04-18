import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProgress03Icon],svg[hugeicons-progress-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12.313c0 5.93 4.82 10.75 10.75 10.75s10.75-4.82 10.75-10.75S17.93 1.563 12 1.563S1.25 6.383 1.25 12.313m1.5 0c0-5.1 4.15-9.25 9.25-9.25s9.25 4.15 9.25 9.25s-4.15 9.25-9.25 9.25s-9.25-4.15-9.25-9.25m14.55-5.3a7.47 7.47 0 0 0-5.3-2.2v15c1.99 0 3.89-.79 5.3-2.2c1.41-1.4 2.2-3.31 2.2-5.3s-.79-3.9-2.2-5.3" color="currentColor"></svg:path>`,
})
export class HugeiconsProgress03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
