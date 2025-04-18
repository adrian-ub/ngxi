import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsVoicePresentationIcon],svg[flat-color-icons-voice-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196F3" d="M40 22h-8l-4 4V12c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v6c0 2.2-1.8 4-4 4"></svg:path><svg:circle cx="17" cy="19" r="8" fill="#FFA726"></svg:circle><svg:path fill="#607D8B" d="M30 36.7S26.4 30 17 30S4 36.7 4 36.7V40h26z"></svg:path>`,
})
export class FlatColorIconsVoicePresentationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
