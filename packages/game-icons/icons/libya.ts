import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsLibyaIcon],svg[game-icons-libya-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m477.6 99.68l8.5 363.72L454 465L211.7 351.9l-48.1 28.2l-137.68-94l14.52-133L98.59 46.98L199.4 77.54l13.1 25.96l97 39.7l34.4-13.8l-19.1-45.75l82.5-22.92z"></svg:path>`,
})
export class GameIconsLibyaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
