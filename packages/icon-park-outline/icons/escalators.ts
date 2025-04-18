import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEscalatorsIcon],svg[icon-park-outline-escalators-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 13L13 35H4v9h9l22-22h9v-9zm-16 0l9-9m-6 0h6v6m-14 8l-9 9m6 0H5v-6"></svg:path>`,
})
export class IconParkOutlineEscalatorsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
