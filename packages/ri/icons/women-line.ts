import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWomenLineIcon],svg[ri-women-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.934A7.501 7.501 0 0 1 12 1a7.5 7.5 0 0 1 1 14.934V18h5v2h-5v4h-2v-4H6v-2h5zM12 14a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path>`,
})
export class RiWomenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
