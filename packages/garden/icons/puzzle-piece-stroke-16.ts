import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPuzzlePieceStroke16Icon],svg[garden-puzzle-piece-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m15.15 7.65l-2.2-2.2c.89-.2 1.55-1 1.55-1.95c0-1.1-.9-2-2-2c-.95 0-1.74.66-1.95 1.55L8.35.85c-.2-.2-.51-.2-.71 0l-2.2 2.2C6.34 3.26 7 4.05 7 5c0 1.1-.9 2-2 2c-.95 0-1.74-.66-1.95-1.55l-2.2 2.2c-.2.2-.2.51 0 .71l2.2 2.2c-.89.2-1.55 1-1.55 1.95c0 1.1.9 2 2 2c.95 0 1.74-.66 1.95-1.55l2.2 2.2c.2.2.51.2.71 0l2.2-2.2C9.66 12.74 9 11.95 9 11c0-1.1.9-2 2-2c.95 0 1.74.66 1.95 1.55l2.2-2.2c.19-.19.19-.51 0-.7z"></svg:path>`,
})
export class GardenPuzzlePieceStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
