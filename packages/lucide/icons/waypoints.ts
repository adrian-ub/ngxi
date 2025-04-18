import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideWaypointsIcon],svg[lucide-waypoints-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="4.5" r="2.5"></svg:circle><svg:path d="m10.2 6.3l-3.9 3.9"></svg:path><svg:circle cx="4.5" cy="12" r="2.5"></svg:circle><svg:path d="M7 12h10"></svg:path><svg:circle cx="19.5" cy="12" r="2.5"></svg:circle><svg:path d="m13.8 17.7l3.9-3.9"></svg:path><svg:circle cx="12" cy="19.5" r="2.5"></svg:circle></svg:g>`,
})
export class LucideWaypointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
