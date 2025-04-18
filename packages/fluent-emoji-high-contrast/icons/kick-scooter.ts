import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastKickScooterIcon],svg[fluent-emoji-high-contrast-kick-scooter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.014 5H12a1 1 0 1 1 0 2H8.905l-.998 9.983l5.666 6.918A3 3 0 0 0 15.894 25h6.232A4.002 4.002 0 0 1 30 26a4 4 0 0 1-7.874 1h-6.232a5 5 0 0 1-3.868-1.832l-4.4-5.373l-.245 2.45A4.002 4.002 0 0 1 6 30a4 4 0 0 1-.61-7.954L7.004 5.911a.99.99 0 0 1 .65-.85A1 1 0 0 1 8.014 5M5.177 24.177a2 2 0 1 0 1.99.199l-.172 1.723a1 1 0 0 1-1.99-.199zM24.267 27a2 2 0 1 0 0-2H26a1 1 0 1 1 0 2z"></svg:path>`,
})
export class FluentEmojiHighContrastKickScooterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
