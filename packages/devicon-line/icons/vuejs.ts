import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconLineVuejsIcon],svg[devicon-line-vuejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8.934l49.854.158l14.299 24.415l14.3-24.415L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.14-.008l-22.749.168l-14.938 25.033L49.215 9.73l-22.794-.168l37.731 64.476z"></svg:path>`,
})
export class DeviconLineVuejsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
