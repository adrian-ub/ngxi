import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRewindCircleFillIcon],svg[ph-rewind-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56 140a8 8 0 0 1-12.8 6.4l-48-36a8 8 0 0 1-3.2-6.4v36a8 8 0 0 1-12.8 6.4l-48-36a8 8 0 0 1 0-12.8l48-36A8 8 0 0 1 120 92v36a8 8 0 0 1 3.2-6.4l48-36A8 8 0 0 1 184 92Z"></svg:path>`,
})
export class PhRewindCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
