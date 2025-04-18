import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCupFourIcon],svg[icon-park-cup-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 25C14 27 15.0714 32 29 32C42.9286 32 44 27 44 25C44 23 44 10 44 10H29H14C14 10 14 23 14 25Z"></svg:path><svg:path stroke-linecap="round" d="M29 16H23V21L26 24L29 21V16Z"></svg:path><svg:path stroke-linecap="round" d="M26 16V10"></svg:path><svg:path stroke-linecap="round" d="M15 40L43 40"></svg:path><svg:path d="M14 14H4C4 14 5 19 5.9991 22C6.99821 25 14 24 14 24"></svg:path></svg:g>`,
})
export class IconParkCupFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
