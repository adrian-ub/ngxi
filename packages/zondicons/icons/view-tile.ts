import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsViewTileIcon],svg[zondicons-view-tile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h9v9H0zm2 2v5h5V2zm-2 9h9v9H0zm2 2v5h5v-5zm9-13h9v9h-9zm2 2v5h5V2zm-2 9h9v9h-9zm2 2v5h5v-5z"></svg:path>`,
})
export class ZondiconsViewTileIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
