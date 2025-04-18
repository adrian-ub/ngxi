import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiRecordButtonIcon],svg[twemoji-record-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:circle cx="18" cy="18" r="11" fill="#FFF"></svg:circle>`,
})
export class TwemojiRecordButtonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
