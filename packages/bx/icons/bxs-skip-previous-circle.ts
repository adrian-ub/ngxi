import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsSkipPreviousCircleIcon],svg[bx-bxs-skip-previous-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c5.515 0 10-4.486 10-10S17.515 2 12 2zm4 14l-6-4v4H8V8h2v4l6-4v8z" fill="currentColor"></svg:path>`,
})
export class BxBxsSkipPreviousCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
