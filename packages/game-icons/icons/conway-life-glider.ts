import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsConwayLifeGliderIcon],svg[game-icons-conway-life-glider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.51 19.51V492.3H492.3V19.51zm18 18H171.1V171.1H37.51zm151.59 0h133.6V171.1H189.1zm151.6 0h133.6V171.1H340.7zm-84.8 9.94a56.85 56.85 0 0 0-56.8 56.85a56.85 56.85 0 0 0 56.8 56.9a56.85 56.85 0 0 0 56.9-56.9a56.85 56.85 0 0 0-56.9-56.85M37.51 189.1H171.1v133.6H37.51zm151.59 0h133.6v133.6H189.1zm151.6 0h133.6v133.6H340.7zm66.9 10a56.85 56.85 0 0 0-56.8 56.8a56.85 56.85 0 0 0 56.8 56.9a56.85 56.85 0 0 0 56.8-56.9a56.85 56.85 0 0 0-56.8-56.8M37.51 340.7H171.1v133.6H37.51zm151.59 0h133.6v133.6H189.1zm151.6 0h133.6v133.6H340.7zm-236.4 10.1a56.85 56.85 0 0 0-56.85 56.8a56.85 56.85 0 0 0 56.85 56.8a56.85 56.85 0 0 0 56.9-56.8a56.85 56.85 0 0 0-56.9-56.8m151.6 0a56.85 56.85 0 0 0-56.8 56.8a56.85 56.85 0 0 0 56.8 56.8a56.85 56.85 0 0 0 56.9-56.8a56.85 56.85 0 0 0-56.9-56.8m151.7 0a56.85 56.85 0 0 0-56.8 56.8a56.85 56.85 0 0 0 56.8 56.8a56.85 56.85 0 0 0 56.8-56.8a56.85 56.85 0 0 0-56.8-56.8"></svg:path>`,
})
export class GameIconsConwayLifeGliderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
