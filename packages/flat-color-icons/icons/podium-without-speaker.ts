import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsPodiumWithoutSpeakerIcon],svg[flat-color-icons-podium-without-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#B0BEC5" d="M43 16H5l-1 4l5 3l-2-3h34l-2 3l5-3z"></svg:path><svg:path fill="#78909C" d="M7 20h34l-4 16H11z"></svg:path>`,
})
export class FlatColorIconsPodiumWithoutSpeakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
