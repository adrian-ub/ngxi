import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconMapIcon],svg[codicon-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 5.777v6.32l3-1.874V3.902zm4-1.875v6.32l3 1.876V5.777zM6 11.09l-3.735 2.334L1.5 13V5.5l.235-.424l4-2.5h.53L10 4.91l3.735-2.334L14.5 3v7.5l-.235.424l-4 2.5h-.53zm4.5-5.313v6.32l3-1.874V3.902z"></svg:path>`,
})
export class CodiconMapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
