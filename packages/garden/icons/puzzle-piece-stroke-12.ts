import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPuzzlePieceStroke12Icon],svg[garden-puzzle-piece-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M11.39 5.73L9.73 4.07c.67-.15 1.17-.75 1.17-1.47c0-.83-.68-1.51-1.51-1.51c-.72 0-1.31.5-1.47 1.17L6.27.61a.37.37 0 0 0-.53 0L4.07 2.27c.67.15 1.17.75 1.17 1.47c0 .83-.68 1.51-1.51 1.51c-.72 0-1.31-.5-1.47-1.17L.61 5.73c-.15.15-.15.39 0 .53l1.66 1.66c-.67.16-1.17.76-1.17 1.47c0 .83.68 1.51 1.51 1.51c.72 0 1.31-.5 1.47-1.17l1.66 1.66c.15.15.39.15.53 0l1.66-1.66c-.67-.15-1.18-.75-1.18-1.47c0-.83.68-1.51 1.51-1.51c.72 0 1.31.5 1.47 1.17l1.66-1.66c.15-.14.15-.38 0-.53z"></svg:path>`,
})
export class GardenPuzzlePieceStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
