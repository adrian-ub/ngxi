import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsClubsIcon],svg[game-icons-clubs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M477.443 295.143a104.45 104.45 0 0 1-202.26 36.67c-.08 68.73 4.33 114.46 69.55 149h-177.57c65.22-34.53 69.63-80.25 69.55-149a104.41 104.41 0 1 1-66.34-136.28a104.45 104.45 0 1 1 171.14 0a104.5 104.5 0 0 1 135.93 99.61"></svg:path>`,
})
export class GameIconsClubsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
