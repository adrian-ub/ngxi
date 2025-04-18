import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAudioFileIcon],svg[icon-park-outline-audio-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 44V4h23l9 10.5V44z"></svg:path><svg:path d="m32 14l-6 2.969V31.5"></svg:path><svg:circle cx="20.5" cy="31.5" r="5.5"></svg:circle></svg:g>`,
})
export class IconParkOutlineAudioFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
