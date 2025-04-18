import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMuteIcon],svg[marketeq-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m35.417 6.25l-14.25 10.417H12.5a2.083 2.083 0 0 0-2.083 2.083v12.5a2.083 2.083 0 0 0 2.083 2.083h8.667l14.25 10.417z"></svg:path><svg:path stroke="#344054" d="M43.75 38.813L6.25 11.186"></svg:path></svg:g>`,
})
export class MarketeqMuteIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
