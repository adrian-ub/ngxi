import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCarpayIcon],svg[arcticons-carpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.945 8.797A21.5 21.5 0 0 1 27.148 2.5m15.203 6.297l-7.071 7.071c-4.491-4.491-11.772-4.491-16.263 0s-4.491 11.772 0 16.263s11.772 4.491 16.263 0l3.535 3.536a16.5 16.5 0 0 1-11.667 4.832"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.481 35.667A16.5 16.5 0 0 1 27.148 7.499"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.351 39.203A21.5 21.5 0 0 1 5.649 24"></svg:path>`,
})
export class ArcticonsCarpayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
