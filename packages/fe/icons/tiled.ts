import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feTiledIcon],svg[fe-tiled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m7 9v5h5v-5zm-7 0v5h5v-5zm7-7v5h5V6zM6 6v5h5V6z"></svg:path>`,
})
export class FeTiledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
