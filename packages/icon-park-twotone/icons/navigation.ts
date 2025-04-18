import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneNavigationIcon],svg[icon-park-twotone-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTNavigation0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24.5 4L9 44l15.5-9.09L40 44z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTNavigation0)"></svg:path>`,
})
export class IconParkTwotoneNavigationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
