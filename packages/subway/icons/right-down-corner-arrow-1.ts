import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayRightDownCornerArrow1Icon],svg[subway-right-down-corner-arrow-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m512 512l-23.3-302.5L384 314.2L69.8 0L0 69.8L314.2 384L209.5 488.7z"></svg:path>`,
})
export class SubwayRightDownCornerArrow1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
