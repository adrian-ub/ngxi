import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNavigationIcon],svg[icon-park-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24.5 4L9 44L24.5 34.9091L40 44L24.5 4Z"></svg:path>`,
})
export class IconParkNavigationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
