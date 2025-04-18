import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBuoyIcon],svg[bxs-buoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m7.736 8h-3.16A5.02 5.02 0 0 0 14 7.424V4.263A8.02 8.02 0 0 1 19.736 10M12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3M10 4.263v3.161A5.02 5.02 0 0 0 7.424 10h-3.16A8.02 8.02 0 0 1 10 4.263M4.264 14h3.16A5.02 5.02 0 0 0 10 16.576v3.161A8.02 8.02 0 0 1 4.264 14M14 19.737v-3.161A5.02 5.02 0 0 0 16.576 14h3.16A8.02 8.02 0 0 1 14 19.737"></svg:path>`,
})
export class BxsBuoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
