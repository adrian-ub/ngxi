import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsShareIcon],svg[game-icons-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 64a64 64 0 0 0-64 64a64 64 0 0 0 1.1 11.3l-146.3 73.2A64 64 0 0 0 128 192a64 64 0 0 0-64 64a64 64 0 0 0 64 64a64 64 0 0 0 46.8-20.5L321 372.7a64 64 0 0 0-1 11.3a64 64 0 0 0 64 64a64 64 0 0 0 64-64a64 64 0 0 0-64-64a64 64 0 0 0-46.8 20.5L191 267.4a64 64 0 0 0 1-11.4a64 64 0 0 0-1.1-11.4l146.3-73.1A64 64 0 0 0 384 192a64 64 0 0 0 64-64a64 64 0 0 0-64-64"></svg:path>`,
})
export class GameIconsShareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
