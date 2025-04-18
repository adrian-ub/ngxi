import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineIncreaseTheScaleIcon],svg[icon-park-outline-increase-the-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M24 9a5 5 0 0 0-10 0v10a5 5 0 0 0 10 0zm18 0a5 5 0 0 0-10 0v10a5 5 0 0 0 10 0z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m36 32l6 6l-6 6"></svg:path><svg:path stroke-linecap="round" d="M6 24h1"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 38H19"></svg:path></svg:g>`,
})
export class IconParkOutlineIncreaseTheScaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
