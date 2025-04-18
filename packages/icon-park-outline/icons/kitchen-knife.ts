import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineKitchenKnifeIcon],svg[icon-park-outline-kitchen-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 30v10c0 6 8 6 8 0V30m0 7h-8"></svg:path><svg:path stroke="currentColor" stroke-width="4" d="M14 6a2 2 0 0 1 2-2h16.635c.319 0 .632.075.888.265C34.542 5.025 37.198 7.582 38 14c.773 6.182-1.369 12.364-2.382 14.855c-.288.71-.985 1.145-1.75 1.145H14z"></svg:path><svg:circle cx="22" cy="10" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineKitchenKnifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
