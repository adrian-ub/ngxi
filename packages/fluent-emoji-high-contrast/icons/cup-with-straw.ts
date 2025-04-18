import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastCupWithStrawIcon],svg[fluent-emoji-high-contrast-cup-with-straw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a.75.75 0 0 0-.75.75V7H13c-.991 0-1.25.507-1.493.987L11.5 8L11 9H8a1 1 0 0 0 0 2l1.5 18c.065.55.5 1 1 1h11c.5 0 .959-.444 1-1L24 11a1 1 0 1 0 0-2h-3l-.5-1c-.237-.491-.5-1-1.5-1h-2.25V3.5H20c.276 0 .5-.336.5-.75S20.276 2 20 2zm5.993 9l-.571 6.859H10.579L10.007 11z"></svg:path>`,
})
export class FluentEmojiHighContrastCupWithStrawIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
