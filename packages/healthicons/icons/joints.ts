import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsJointsIcon],svg[healthicons-joints-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 4a1 1 0 0 1 1 1v8.343a4 4 0 0 1-1.172 2.829l-.503.503a3.287 3.287 0 0 0 3.794 5.265l.243-.12a3.66 3.66 0 0 1 3.276 0l.243.12a3.287 3.287 0 0 0 3.794-5.265l-.503-.503A4 4 0 0 1 28 13.343V5a1 1 0 1 1 2 0v2.024C36.991 9.495 42 16.163 42 24s-5.009 14.505-12 16.976V43a1 1 0 1 1-2 0v-8.343a4 4 0 0 1 1.172-2.829l.503-.503a3.287 3.287 0 0 0-3.794-5.265l-.243.12a3.66 3.66 0 0 1-3.276 0l-.243-.12a3.287 3.287 0 0 0-3.794 5.265l.503.503A4 4 0 0 1 20 34.657V43a1 1 0 1 1-2 0v-2.024C11.009 38.505 6 31.837 6 24S11.009 9.495 18 7.024V5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsJointsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
