import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayLeftDownCornerArrow1Icon],svg[subway-left-down-corner-arrow-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 69.8L442.2 0L128 314.2L23.3 209.5L0 512l302.5-23.3L197.8 384z"></svg:path>`,
})
export class SubwayLeftDownCornerArrow1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
