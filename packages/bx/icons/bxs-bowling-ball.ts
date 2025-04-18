import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsBowlingBallIcon],svg[bx-bxs-bowling-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zM6.5 12a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 12zM9 6.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 9 6.5zm2.5 6.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 11.5 13z" fill="currentColor"></svg:path>`,
})
export class BxBxsBowlingBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
