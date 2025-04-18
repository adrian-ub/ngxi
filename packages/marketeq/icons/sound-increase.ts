import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSoundIncreaseIcon],svg[marketeq-sound-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 25h12.5m-6.25 6.25v-12.5z"></svg:path><svg:path stroke="#306CFE" d="M22.917 10.417v29.166l-8.334-8.333h-6.25a2.083 2.083 0 0 1-2.083-2.083v-8.334a2.083 2.083 0 0 1 2.083-2.083h6.25z"></svg:path></svg:g>`,
})
export class MarketeqSoundIncreaseIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
