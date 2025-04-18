import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStatus2Icon],svg[arcticons-status2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.998 4.628a9.36 9.36 0 0 1 8.467 10.17c-.47 5.147-4.855 8.124-10.17 8.467c0 0-2.98.427-8.668-1.476a20.15 20.15 0 0 0-11.018-.31S17.153 2.785 34 4.628M14.002 43.372a9.36 9.36 0 0 1-8.467-10.17c.47-5.147 4.855-8.124 10.17-8.467c0 0 2.98-.427 8.668 1.476a20.15 20.15 0 0 0 11.018.31s-4.544 18.694-21.39 16.851"></svg:path>`,
})
export class ArcticonsStatus2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
