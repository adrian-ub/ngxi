import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRowHeightIcon],svg[icon-park-outline-row-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m16 35l-6 6l-6-6m12-22l-6-6l-6 6m6-6v34M44 9H22m14 10H22m22 10H22m14 10H22"></svg:path>`,
})
export class IconParkOutlineRowHeightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
