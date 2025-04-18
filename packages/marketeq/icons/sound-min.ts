import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSoundMinIcon],svg[marketeq-sound-min-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M36.542 17.625a10.415 10.415 0 0 1 0 14.75"></svg:path><svg:path stroke="#306CFE" d="M27.083 10.417v29.166L18.75 31.25H12.5a2.083 2.083 0 0 1-2.083-2.083v-8.334A2.083 2.083 0 0 1 12.5 18.75h6.25z"></svg:path></svg:g>`,
})
export class MarketeqSoundMinIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
