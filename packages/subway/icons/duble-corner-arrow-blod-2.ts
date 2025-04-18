import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDubleCornerArrowBlod2Icon],svg[subway-duble-corner-arrow-blod-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m511.9 232.7l-93-93V349l-93-93l-69.9 69.8l93 93H139.7l93 93l279.3.2zM256 186.2l-93-93h209.4l-93-93L0 0l.1 279.3l93 93V163l93 93z"></svg:path>`,
})
export class SubwayDubleCornerArrowBlod2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
