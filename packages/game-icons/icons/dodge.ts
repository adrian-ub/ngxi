import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsDodgeIcon],svg[game-icons-dodge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M465.074 481.646c-24.928 1.186-334.495-.667-334.495-.667c-188.07-188.857 283.16-251.37-8.1-406.484l-20.382 21.487l-27.14-71.216l87.582 6.818l-17.534 19.7c364.276 106.15-48.98 305.105 320.068 430.36z"></svg:path>`,
})
export class GameIconsDodgeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
