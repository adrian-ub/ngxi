import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsBlackKnightHelmIcon],svg[game-icons-black-knight-helm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16c-36.446 0-73.264 13.433-139.97 40h279.94C329.263 29.433 292.445 16 256 16M95.344 72L64 448c56 28 112 31.5 168 31.938V240H112v-48h288v48H280v239.938C336 479.5 392 476 448 448L416.656 72zm64.875 88a8 8 0 0 1 7.78 8a8 8 0 0 1-16 0a8 8 0 0 1 8.22-8m48 0a8 8 0 0 1 7.78 8a8 8 0 0 1-16 0a8 8 0 0 1 8.22-8m48 0a8 8 0 0 1 7.78 8a8 8 0 0 1-16 0a8 8 0 0 1 8.22-8m48 0a8 8 0 0 1 7.78 8a8 8 0 0 1-16 0a8 8 0 0 1 8.22-8m48 0a8 8 0 0 1 7.78 8a8 8 0 0 1-16 0a8 8 0 0 1 8.22-8M248 240v240q4 .002 8 0c4-.002 5.333.002 8 0V240zm-120 48h16v16h-16zm32 0h16v16h-16zm32 0h16v16h-16zm112 0h16v16h-16zm32 0h16v16h-16zm32 0h16v16h-16zm-240 32h16v16h-16zm32 0h16v16h-16zm32 0h16v16h-16zm112 0h16v16h-16zm32 0h16v16h-16zm32 0h16v16h-16zm-240 32h16v16h-16zm32 0h16v16h-16zm32 0h16v16h-16zm112 0h16v16h-16zm32 0h16v16h-16zm32 0h16v16h-16z"></svg:path>`,
})
export class GameIconsBlackKnightHelmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
