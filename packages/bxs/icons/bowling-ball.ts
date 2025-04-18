import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBowlingBallIcon],svg[bxs-bowling-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2M6.5 12a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 12M9 6.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 9 6.5m2.5 6.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 11.5 13"></svg:path>`,
})
export class BxsBowlingBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
