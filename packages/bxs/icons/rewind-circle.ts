import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsRewindCircleIcon],svg[bxs-rewind-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.485 2 12s4.486 10 10 10s10-4.485 10-10S17.515 2 12 2m5 14l-6-4v4l-6-4l6-4v4l6-4z"></svg:path>`,
})
export class BxsRewindCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
