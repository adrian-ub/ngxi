import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAudioFileIcon],svg[icon-park-audio-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 44V4H31L40 14.5V44H8Z"></svg:path><svg:path stroke="#fff" d="M32 14L26 16.9688V31.5"></svg:path><svg:circle cx="20.5" cy="31.5" r="5.5" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkAudioFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
