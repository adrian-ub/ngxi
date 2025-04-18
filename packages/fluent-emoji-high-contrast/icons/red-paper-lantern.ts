import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastRedPaperLanternIcon],svg[fluent-emoji-high-contrast-red-paper-lantern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 2A1.5 1.5 0 0 0 12 3.5V5h-.127a9 9 0 0 0-2.581 2h13.416a9 9 0 0 0-2.58-2H20V3.5A1.5 1.5 0 0 0 18.5 2zm-6.277 9c.17-.749.433-1.462.777-2.127V9h16v-.127c.344.665.607 1.378.777 2.127zM7 15v-2h18v2zm4.873 12a9 9 0 0 1-2.581-2h13.416a9 9 0 0 1-2.58 2H20v1.5a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5V27zM8 23.127A9 9 0 0 1 7.223 21h17.554A9 9 0 0 1 24 23.127V23H8zM7 19v-2h18v2z"></svg:path>`,
})
export class FluentEmojiHighContrastRedPaperLanternIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
