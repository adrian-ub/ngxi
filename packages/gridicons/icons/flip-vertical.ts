import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsFlipVerticalIcon],svg[gridicons-flip-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4h-5V1h-2v3H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5v3h2v-3h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 18V6h5v12z"></svg:path>`,
})
export class GridiconsFlipVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
