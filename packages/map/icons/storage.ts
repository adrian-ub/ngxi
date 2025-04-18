import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapStorageIcon],svg[map-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h44v5H3zm3 7v33h38V13zm26 9H17v-3h15z"></svg:path>`,
})
export class MapStorageIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
