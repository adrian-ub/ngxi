import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAfferentThreeIcon],svg[icon-park-afferent-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V29"></svg:path><svg:path d="M18 17L22 29L34 25"></svg:path><svg:path d="M22 29C27 14 30 11 40 7"></svg:path></svg:g>`,
})
export class IconParkAfferentThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
