import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsInfoIcon],svg[dashicons-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8m1 4c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1m0 9V9H9v6z"></svg:path>`,
})
export class DashiconsInfoIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
