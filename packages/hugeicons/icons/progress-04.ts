import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProgress04Icon],svg[hugeicons-progress-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12.313c0-5.93 4.82-10.75 10.75-10.75s10.75 4.82 10.75 10.75s-4.82 10.75-10.75 10.75s-10.75-4.82-10.75-10.75m1.5 0c0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25s-4.15-9.25-9.25-9.25s-9.25 4.15-9.25 9.25m13.42-6.24c1.23.83 2.19 2 2.76 3.37h-.01c.57 1.37.72 2.88.43 4.33c-.29 1.46-1 2.79-2.05 3.84a7.47 7.47 0 0 1-8.17 1.63a7.5 7.5 0 0 1-3.37-2.76a7.56 7.56 0 0 1-1.26-4.17H12v-7.5c1.49 0 2.94.44 4.17 1.26" color="currentColor"></svg:path>`,
})
export class HugeiconsProgress04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
