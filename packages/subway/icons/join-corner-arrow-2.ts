import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayJoinCornerArrow2Icon],svg[subway-join-corner-arrow-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m511.9 232.7l-93.1-93V349L163 93.2h209.3L279.3.1L0 0l.1 279.3l93.1 93V163L349 418.8H139.7l93 93.1l279.3.1z"></svg:path>`,
})
export class SubwayJoinCornerArrow2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
