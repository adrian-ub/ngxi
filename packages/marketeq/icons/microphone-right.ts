import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMicrophoneRightIcon],svg[marketeq-microphone-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m6.25 43.75l8.542-8.542"></svg:path><svg:path stroke="#306CFE" d="M34.896 22.917L19.208 36.875a2.083 2.083 0 0 1-2.854 0L13.23 33.75a2.083 2.083 0 0 1 0-2.854l13.854-15.792zm6.416-14.209a8.33 8.33 0 0 0-11.791 0a8.34 8.34 0 0 0-2.438 6.438l7.709 7.708a8.33 8.33 0 0 0 6.458-2.375a8.334 8.334 0 0 0 .063-11.792z"></svg:path><svg:path stroke="#344054" d="M36.896 24.896L25.104 13.104"></svg:path></svg:g>`,
})
export class MarketeqMicrophoneRightIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
