import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsMapAltIcon],svg[bxs-map-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 6.882l-7-3.5v13.236l7 3.5l6-3l7 3.5V7.382l-7-3.5zM15 15l-6 3V9l6-3z"></svg:path>`,
})
export class BxsMapAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
