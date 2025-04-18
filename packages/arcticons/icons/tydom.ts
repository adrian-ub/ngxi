import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTydomIcon],svg[arcticons-tydom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.5v-37M24 24H5.5m0 0L24 42.5m10.5-37h-25a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h25a8 8 0 0 0 8-8v-21a8 8 0 0 0-8-8"></svg:path>`,
})
export class ArcticonsTydomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
