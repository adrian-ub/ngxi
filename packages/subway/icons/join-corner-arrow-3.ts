import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayJoinCornerArrow3Icon],svg[subway-join-corner-arrow-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M325.8.1L256 69.9h139.6L69.9 395.6V256L.1 325.8L0 512l186.2-.1l69.8-69.8H116.4l325.7-325.7V256l69.8-69.8L512 0z"></svg:path>`,
})
export class SubwayJoinCornerArrow3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
