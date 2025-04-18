import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSpeakerOneIcon],svg[icon-park-speaker-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="11" height="18" x="4" y="15" fill="#2F88FF"></svg:rect><svg:path d="M15 15L33 8V40L15 33"></svg:path><svg:path d="M40 17H42"></svg:path><svg:path d="M39 25H44"></svg:path><svg:path d="M40 33H42"></svg:path></svg:g>`,
})
export class IconParkSpeakerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
