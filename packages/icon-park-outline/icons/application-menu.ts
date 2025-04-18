import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineApplicationMenuIcon],svg[icon-park-outline-application-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8M10 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8M10 42a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class IconParkOutlineApplicationMenuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
