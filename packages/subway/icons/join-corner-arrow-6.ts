import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayJoinCornerArrow6Icon],svg[subway-join-corner-arrow-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.5 23.3L314.2 128L128 314.2L23.3 209.5L0 512l302.5-23.3L197.8 384L384 197.8l104.7 104.7L512 0z"></svg:path>`,
})
export class SubwayJoinCornerArrow6Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
