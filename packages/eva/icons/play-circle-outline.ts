import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaPlayCircleOutlineIcon],svg[eva-play-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path><svg:path fill="currentColor" d="M12.34 7.45a1.7 1.7 0 0 0-1.85-.3a1.6 1.6 0 0 0-1 1.48v6.74a1.6 1.6 0 0 0 1 1.48a1.7 1.7 0 0 0 .69.15a1.74 1.74 0 0 0 1.16-.45L16 13.18a1.6 1.6 0 0 0 0-2.36Zm-.84 7.15V9.4l2.81 2.6Z"></svg:path>`,
})
export class EvaPlayCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
