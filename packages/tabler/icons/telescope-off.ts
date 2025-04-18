import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTelescopeOffIcon],svg[tabler-telescope-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 21l6-5l6 5m-6-8v8M8.238 8.264l-4.183 2.51c-1.02.614-1.357 1.898-.76 2.906l.165.28c.52.88 1.624 1.266 2.605.91l6.457-2.34m2.907-1.055l4.878-1.77a1.023 1.023 0 0 0 .565-1.455l-2.62-4.705a1.087 1.087 0 0 0-1.447-.42l-.056.032l-6.016 3.61M14 5l3 5.5M3 3l18 18"></svg:path>`,
})
export class TablerTelescopeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
