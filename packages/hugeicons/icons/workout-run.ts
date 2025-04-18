import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutRunIcon],svg[hugeicons-workout-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M15 21l-.664-2.616a4.9 4.9 0 0 0-1.315-2.288L11.5 14.6M6 11.153C7 9.183 8.538 8.04 12 8m0 0c.219-.003.544-.004.87-.004c.505 0 .757 0 .958.094s.408.34.82.834c.118.14.24.267.352.352M12 8l-1.27 1.958c-.697 1.076-1.046 1.615-1.06 2.18a2 2 0 0 0 .123.739c.195.53.7.927 1.707 1.721M15 9.277c1.155.866 2.963 1.214 5-1.079m-5 1.079l-3.5 5.322M4 17.73l.678.162C6.407 18.302 8.203 17.516 9 16" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkoutRunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
