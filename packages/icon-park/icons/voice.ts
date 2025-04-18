import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVoiceIcon],svg[icon-park-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="27" x="17" y="4" fill="#2F88FF" rx="7"></svg:rect><svg:path stroke-linecap="round" d="M9 23C9 31.2843 15.7157 38 24 38C32.2843 38 39 31.2843 39 23"></svg:path><svg:path stroke-linecap="round" d="M24 38V44"></svg:path></svg:g>`,
})
export class IconParkVoiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
