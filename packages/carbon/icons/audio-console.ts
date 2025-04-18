import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAudioConsoleIcon],svg[carbon-audio-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 14.005h-1v-12h-2v12h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v10h2v-10h1a2.003 2.003 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 4h-4v-2h4zm-10-12h-1v-4h-2v4h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v18h2v-18h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 4h-4v-2h4zm-10 10H7v-18H5v18H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v4h2v-4h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 4H4v-2h4z"></svg:path>`,
})
export class CarbonAudioConsoleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
