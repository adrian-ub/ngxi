import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsArenaIcon],svg[game-icons-arena-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 16C36 36 31 46 31 46c40 160 5 275-15 375c0 0 10 25 90 45V256c0-80-30-240-30-240m360 0s-30 160-30 240v210c80-20 90-45 90-45c-20-100-55-215-15-375c0 0-5-10-45-30M226 196c-40 0-90 15-90 15v270s50 15 90 15h60c40 0 90-15 90-15V211s-50-15-90-15z"></svg:path>`,
})
export class GameIconsArenaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
