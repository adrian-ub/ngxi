import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsLevelTwoIcon],svg[game-icons-level-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16c-22.5 72-45 72-45 120c0 0 22.5 24 45 24s45-24 45-24c0-48-22.5-48-45-120m2.625 144.03A90 96 0 0 0 166 256a90 96 0 0 0 180 0a90 96 0 0 0-87.375-95.97M256 352c-22.5 0-45 24-45 24c0 48 22.5 48 45 120c22.5-72 45-72 45-120c0 0-22.5-24-45-24"></svg:path>`,
})
export class GameIconsLevelTwoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
