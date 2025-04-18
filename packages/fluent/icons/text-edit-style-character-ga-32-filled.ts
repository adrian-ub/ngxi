import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextEditStyleCharacterGa32FilledIcon],svg[fluent-text-edit-style-character-ga-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a1 1 0 0 1 1 1v4h2a1 1 0 1 1 0 2h-2v4.467l-2 2V4a1 1 0 0 1 1-1M4 15c-.46 0-.88-.32-.98-.79c-.12-.54.23-1.07.77-1.19c.24-.05 5.6-1.3 6.16-7.02H4c-.55 0-1-.45-1-1s.45-1 1-1h7c.55 0 1 .45 1 1c0 8.123-7.548 9.922-7.785 9.979l-.005.001C4.14 15 4.07 15 4 15m23.674-3.672a4.536 4.536 0 0 0-6.414 0l-9.42 9.42a4 4 0 0 0-1.017 1.73l-1.786 6.25a1 1 0 0 0 1.236 1.237l6.254-1.787a4 4 0 0 0 1.73-1.018l9.417-9.417a4.535 4.535 0 0 0 0-6.415"></svg:path>`,
})
export class FluentTextEditStyleCharacterGa32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
