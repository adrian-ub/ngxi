import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTreeIcon],svg[icon-park-outline-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13.045 14C13.55 8.393 18.262 4 24 4s10.45 4.393 10.955 10H35a9 9 0 1 1 0 18H13a9 9 0 1 1 0-18zM24 28l5-5m-5 2l-6-6m6 25V18"></svg:path>`,
})
export class IconParkOutlineTreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
