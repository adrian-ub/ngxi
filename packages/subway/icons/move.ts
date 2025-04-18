import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMoveIcon],svg[subway-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 256L405.3 149.3v85.4h-128v-128h85.4L256 0L149.3 106.7h85.4v128h-128v-85.4L0 256l106.7 106.7v-85.4h128v128h-85.4L256 512l106.7-106.7h-85.4v-128h128v85.4z"></svg:path>`,
})
export class SubwayMoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
