import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageBuildingAIcon],svg[mage-building-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.531 3.212h6.938a2.775 2.775 0 0 1 2.775 2.775v14.8H5.756v-14.8a2.775 2.775 0 0 1 2.775-2.775M2.75 20.788h18.5"></svg:path><svg:path d="M11.075 14.313h1.85a1.387 1.387 0 0 1 1.387 1.387v5.088H9.689V15.7a1.387 1.387 0 0 1 1.387-1.387m-1.851-7.4h5.55m-5.55 3.7h5.55"></svg:path></svg:g>`,
})
export class MageBuildingAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
