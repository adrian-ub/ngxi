import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsPodiumWithSpeakerIcon],svg[flat-color-icons-podium-with-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="11" r="6" fill="#FFB74D"></svg:circle><svg:path fill="#607D8B" d="M36 26.1S32.7 19 24 19s-12 7.1-12 7.1V30h24z"></svg:path><svg:path fill="#B0BEC5" d="M41 25H7l-1 4l5 3l-2-3h30l-2 3l5-3z"></svg:path><svg:path fill="#78909C" d="M9 29h30l-4 12H13z"></svg:path>`,
})
export class FlatColorIconsPodiumWithSpeakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
