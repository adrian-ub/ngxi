import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVoiceInputIcon],svg[icon-park-voice-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 30C4 36.6274 9.37258 42 16 42C22.6274 42 26 38 27 35L28.5385 30L35 9L44 42"></svg:path><svg:path d="M40.7274 30H28.5386"></svg:path><svg:path fill="#2F88FF" d="M22 15C22 11.6863 19.3137 9 16 9C12.6863 9 10 11.6863 10 15V30C10 33.3137 12.6863 36 16 36C19.3137 36 22 33.3137 22 30V15Z"></svg:path></svg:g>`,
})
export class IconParkVoiceInputIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
