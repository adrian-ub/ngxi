import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsMoreIcon],svg[lineicons-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 39.5c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5M32 29c-1.7 0-3 1.4-3 3s1.4 3 3 3s3-1.4 3-3s-1.3-3-3-3m23.7 10.5c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5c.1 4.1-3.3 7.5-7.5 7.5m0-10.5c-1.7 0-3 1.4-3 3s1.4 3 3 3s3-1.4 3-3s-1.3-3-3-3M8.3 39.5C4.2 39.5.8 36.1.8 32s3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5m0-10.5c-1.7 0-3 1.4-3 3s1.4 3 3 3c1.7 0 3-1.4 3-3s-1.4-3-3-3"></svg:path>`,
})
export class LineiconsMoreIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
