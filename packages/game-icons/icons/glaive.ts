import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsGlaiveIcon],svg[game-icons-glaive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488.7 24.74c-25.6 25.54-51.7 50.93-78 76.26c-57-13.38-129.6 16.5-170.7 43c49.3-8 98.8-16.3 120.4 4.7c-85.4 80.4-173.5 159.8-261.92 239l38.92 44.9c23.9-8.7 56.6-29.2 92-57.6c38-30.6 79.2-70.3 117.4-113.7c67.7-76.8 125.6-166.14 141.9-236.56M94.96 409.3l-13.61 12.5l19.95 22.6l14-12.9zM68.06 434L18 480.1V494h29.39l40.65-37.4z"></svg:path>`,
})
export class GameIconsGlaiveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
