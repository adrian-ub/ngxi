import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapStoreIcon],svg[map-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.562 2.966L0 21h6v22h4V28h8v15h27V21h5zM42 37H23v-9h19zm0-12H9v-8h33zm-2-6v4H11v-4zm1-1H10v6h31z"></svg:path>`,
})
export class MapStoreIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
