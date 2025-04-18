import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayJoinCornerArrow1Icon],svg[subway-join-corner-arrow-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.7.1l-93 93.1H349L93.2 349V139.7l-93.1 93L0 512l279.3-.1l93-93.1H163L418.8 163v209.3l93.1-93L512 0z"></svg:path>`,
})
export class SubwayJoinCornerArrow1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
