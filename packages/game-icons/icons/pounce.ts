import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPounceIcon],svg[game-icons-pounce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m196 16l60 60l60-60zm-30 90l90 90l90-90zm-30 120l120 120l120-120zm121.75 150.03A60 60 0 0 0 196 436a60 60 0 0 0 120 0a60 60 0 0 0-58.25-59.97"></svg:path>`,
})
export class GameIconsPounceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
