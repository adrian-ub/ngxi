import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedLargeIcon],svg[healthicons-triangle-inverted-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 40c-.379 0-.725-.18-.894-.465l-18-30.316a.73.73 0 0 1 .043-.82C5.332 8.151 5.653 8 6 8h36c.347 0 .668.151.85.4a.73.73 0 0 1 .044.819l-18 30.316c-.169.285-.515.465-.894.465"></svg:path>`,
})
export class HealthiconsTriangleInvertedLargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
