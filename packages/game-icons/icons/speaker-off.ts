import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsSpeakerOffIcon],svg[game-icons-speaker-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m275.5 96l-96 96h-96v128h96l96 96zm50.863 89.637l-12.726 12.726L371.273 256l-57.636 57.637l12.726 12.726L384 268.727l57.637 57.636l12.726-12.726L396.727 256l57.636-57.637l-12.726-12.726L384 243.273z"></svg:path>`,
})
export class GameIconsSpeakerOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
