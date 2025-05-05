import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAirplaneSeat02Icon],svg[hugeicons-airplane-seat-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M19.5 7h-15c.588-2.35 2.7-4 5.123-4h4.754A5.28 5.28 0 0 1 19.5 7M18 16.5V7h2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-3 0M6 19V7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2m-3-2.5V8a1 1 0 0 1 1-1h2v9.5a1.5 1.5 0 0 1-3 0" color="currentColor"></svg:path>`,
})
export class HugeiconsAirplaneSeat02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
