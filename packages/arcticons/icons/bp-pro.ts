import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBpProIcon],svg[arcticons-bp-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.817 5.5L5.698 16.015V42.5h26.485l10.119-10.515V5.5zM5.698 24.87h15.14m-7.57-7.57v15.14M23.447 17.3l11.799 15.14m0-15.14L23.447 32.44"></svg:path>`,
})
export class ArcticonsBpProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
