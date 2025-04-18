import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCupFourIcon],svg[icon-park-outline-cup-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 25c0 2 1.071 7 15 7s15-5 15-7V10H14z"></svg:path><svg:path stroke-linecap="round" d="M29 16h-6v5l3 3l3-3zm-3 0v-6M15 40h28"></svg:path><svg:path d="M14 14H4s1 5 2 8c.998 3 8 2 8 2"></svg:path></svg:g>`,
})
export class IconParkOutlineCupFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
