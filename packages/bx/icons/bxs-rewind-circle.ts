import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsRewindCircleIcon],svg[bx-bxs-rewind-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2C6.486 2 2 6.485 2 12s4.486 10 10 10c5.515 0 10-4.485 10-10S17.515 2 12 2zm5 14l-6-4v4l-6-4l6-4v4l6-4v8z" fill="currentColor"></svg:path>`,
})
export class BxBxsRewindCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
