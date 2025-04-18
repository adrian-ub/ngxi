import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoTabletAltIcon],svg[fontisto-tablet-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.308 0H1.954A2.12 2.12 0 0 0 0 2.257v-.006V21.75A2.12 2.12 0 0 0 1.948 24h14.356a2.12 2.12 0 0 0 1.954-2.256v.006V2.251a2.114 2.114 0 0 0-1.942-2.25h-.007zM9.131 22.5a1.498 1.498 0 1 1 .002-2.996a1.498 1.498 0 0 1-.002 2.996h-.002z"></svg:path>`,
})
export class FontistoTabletAltIcon {
  readonly viewBox = input("0 0 18 24")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
