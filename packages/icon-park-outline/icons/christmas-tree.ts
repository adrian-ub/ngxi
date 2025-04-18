import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChristmasTreeIcon],svg[icon-park-outline-christmas-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m20 14l-4-2l8-8l8 8l-4 2l8 8l-6 2l9 10H9l8-10l-5-2zm11 30H17m4-10l-1 10m7-10l1 10"></svg:path>`,
})
export class IconParkOutlineChristmasTreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
