import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDistributeHorizontallyIcon],svg[icon-park-outline-distribute-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 10v28H18V10z"></svg:path><svg:path stroke-linecap="round" d="M40 6v36M8 6v36"></svg:path></svg:g>`,
})
export class IconParkOutlineDistributeHorizontallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
