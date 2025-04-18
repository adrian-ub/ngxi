import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDistributeVerticallyIcon],svg[icon-park-outline-distribute-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 30H10V18h28z"></svg:path><svg:path stroke-linecap="round" d="M42 40H6M42 8H6"></svg:path></svg:g>`,
})
export class IconParkOutlineDistributeVerticallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
