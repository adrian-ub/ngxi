import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSandstormIcon],svg[icon-park-outline-sandstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 22h32a8 8 0 1 0-8-8M10 29H4m23 0h-6m23 0h-6m-28 6H4m23 0h-6m23 0h-6m-22 7H4m40 0H32"></svg:path>`,
})
export class IconParkOutlineSandstormIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
