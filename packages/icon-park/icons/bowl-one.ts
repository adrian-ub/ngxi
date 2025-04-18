import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBowlOneIcon],svg[icon-park-bowl-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M24 39C33.3888 39 41 31.9411 41 22H7C7 31.9411 14.6112 39 24 39Z"></svg:path><svg:path stroke-linejoin="round" d="M18 38L16 44H32L30 38"></svg:path><svg:path d="M12 10L12 14"></svg:path><svg:path d="M36 10L36 14"></svg:path><svg:path d="M24 5L24 14"></svg:path></svg:g>`,
})
export class IconParkBowlOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
