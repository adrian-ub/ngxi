import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChristmasTreeOneIcon],svg[icon-park-outline-christmas-tree-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 36v8M14 15L24 4l10 11l-3 3l8 8l-5 1.158L42 36H6l8-8.842L9 26l8-8z"></svg:path>`,
})
export class IconParkOutlineChristmasTreeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
