import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayJoinCornerArrow4Icon],svg[subway-join-corner-arrow-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M511.9 325.8L442.1 256v139.6L116.4 69.9H256L186.2.1L0 0l.1 186.2L69.9 256V116.4l325.7 325.7H256l69.8 69.8l186.2.1z"></svg:path>`,
})
export class SubwayJoinCornerArrow4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
