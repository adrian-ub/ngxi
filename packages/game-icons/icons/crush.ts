import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsCrushIcon],svg[game-icons-crush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 16c-15 0-30 15-30 30v240h60l60 60l60-60l60 60l60-60l60 60l60-60h60V46c0-15-15-30-30-30zm211.75 360.03A60 60 0 0 0 196 436a60 60 0 0 0 120 0a60 60 0 0 0-58.25-59.97"></svg:path>`,
})
export class GameIconsCrushIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
