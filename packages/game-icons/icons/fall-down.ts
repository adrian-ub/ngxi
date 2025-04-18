import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsFallDownIcon],svg[game-icons-fall-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M257.75 16.03A60 60 0 0 0 196 76a60 60 0 0 0 120 0a60 60 0 0 0-58.25-59.97M250.72 166c-24.72.11-24.72 1.875-24.72 30v210h-60l90 90l90-90h-60V196c0-30 0-30-30-30c-1.875 0-3.633-.007-5.28 0"></svg:path>`,
})
export class GameIconsFallDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
