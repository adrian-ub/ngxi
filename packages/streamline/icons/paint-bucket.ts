import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePaintBucketIcon],svg[streamline-paint-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 6.9L6.1.5L.7 7.7A1 1 0 0 0 .79 9L4 12.21a1 1 0 0 0 1.29.09zm-1.196 6.167c-.387-.448-.262-1.118-.037-1.666c.162-.395.366-.76.608-1.176A.42.42 0 0 1 12.25 10a.4.4 0 0 1 .367.225c.247.417.454.783.617 1.18c.225.545.35 1.212-.035 1.66a1.25 1.25 0 0 1-1.895.002"></svg:path>`,
})
export class StreamlinePaintBucketIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
