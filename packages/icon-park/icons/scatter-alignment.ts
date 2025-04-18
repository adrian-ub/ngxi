import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkScatterAlignmentIcon],svg[icon-park-scatter-alignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 14L42 14"></svg:path><svg:path d="M10 24L38 24"></svg:path><svg:path d="M6 34L34 34"></svg:path></svg:g>`,
})
export class IconParkScatterAlignmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
