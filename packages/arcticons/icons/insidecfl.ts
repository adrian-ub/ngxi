import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInsidecflIcon],svg[arcticons-insidecfl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.157 17.072H15.368c-1.384 0-2.186.376-2.805 1.334l-3.142 4.869c-.77 1.193-.539 2.21 1.077 2.21h7.136"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.04 20.334l-6.904.01l-3.297 5.208m15.278-8.466l-5.46 8.394h9.346"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 29.98V12.4c0-2.477 1.57-3.795 3.795-3.795h31.437c2.544 0 3.768 1.574 3.768 3.768v18.04c0 2.073-1.27 3.663-3.663 3.663H32.94L22.415 41.11c-1.139.762-1.992-.14-1.351-1.127l3.831-5.907H8.377C5.9 34.076 4.5 32.65 4.5 29.98"></svg:path>`,
})
export class ArcticonsInsidecflIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
