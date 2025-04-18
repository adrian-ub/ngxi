import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayJoinCornerArrow5Icon],svg[subway-join-corner-arrow-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m512 512l-23.3-302.5L384 314.2L197.8 128L302.5 23.3L0 0l23.3 302.5L128 197.8L314.2 384L209.5 488.7z"></svg:path>`,
})
export class SubwayJoinCornerArrow5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
