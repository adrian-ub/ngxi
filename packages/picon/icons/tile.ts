import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTileIcon],svg[picon-tile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7V4h3v3M0 7V4h3v3m1-4V0h3v3M0 3V0h3v3"></svg:path>`,
})
export class PiconTileIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
