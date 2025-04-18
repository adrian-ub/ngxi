import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFileMediaIcon],svg[octicon-file-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 5h2v2H6V5zm6-.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v11l3-5l2 4l2-2l3 3V5z" fill="currentColor"></svg:path>`,
})
export class OcticonFileMediaIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
