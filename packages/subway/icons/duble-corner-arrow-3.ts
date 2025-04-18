import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDubleCornerArrow3Icon],svg[subway-duble-corner-arrow-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116.4 69.9H256L186.2.1L0 0l.1 186.2L69.9 256V116.4L209.5 256l46.5-46.5zm395.5 255.9L442.1 256v139.6L302.5 256L256 302.5l139.6 139.6H256l69.8 69.8l186.2.1z"></svg:path>`,
})
export class SubwayDubleCornerArrow3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
