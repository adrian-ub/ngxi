import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineInternalDataIcon],svg[icon-park-outline-internal-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 18V9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v9m-10 6v7m-8-16v16m-8-12v12M6 30v9a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9"></svg:path>`,
})
export class IconParkOutlineInternalDataIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
