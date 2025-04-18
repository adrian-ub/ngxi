import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsSpikesInitIcon],svg[game-icons-spikes-init-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16c-7.5 67.5-37.5 150-37.5 180c0 15 15 30 37.5 30s37.5-15 37.5-30c0-30-30-112.5-37.5-180m-60 202.5c-30 0-112.5 30-180 37.5c67.5 7.5 150 37.5 180 37.5c15 0 30-15 30-37.5s-15-37.5-30-37.5m120 0c-15 0-30 15-30 37.5s15 37.5 30 37.5c30 0 112.5-30 180-37.5c-67.5-7.5-150-37.5-180-37.5M256 286c-22.5 0-37.5 15-37.5 30c0 30 30 112.5 37.5 180c7.5-67.5 37.5-150 37.5-180c0-15-15-30-37.5-30"></svg:path>`,
})
export class GameIconsSpikesInitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
