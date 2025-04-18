import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAfferentIcon],svg[icon-park-afferent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M42 13.875V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V34.6875"></svg:path><svg:path d="M42 24L24 24"></svg:path><svg:path stroke-linejoin="round" d="M30 30L24 24L30 18"></svg:path></svg:g>`,
})
export class IconParkAfferentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
