import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsHourglassIcon],svg[bxs-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22h1v-2h-1v-1a7.01 7.01 0 0 0-3.433-6.02c-.355-.21-.567-.547-.567-.901v-.158c0-.354.212-.691.566-.9A7.02 7.02 0 0 0 19 5V4h1V2H4v2h1v1a7.02 7.02 0 0 0 3.434 6.021c.354.209.566.545.566.9v.158c0 .354-.212.691-.566.9A7.02 7.02 0 0 0 5 19v1H4v2zM17 4v1a5 5 0 0 1-1.004 3H8.004A5 5 0 0 1 7 5V4zM9.45 14.702c.971-.574 1.55-1.554 1.55-2.623V12h2v.079c0 1.068.579 2.049 1.551 2.623A4.98 4.98 0 0 1 16.573 17H7.427a4.98 4.98 0 0 1 2.023-2.298"></svg:path>`,
})
export class BxsHourglassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
