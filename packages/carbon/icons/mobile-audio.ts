import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMobileAudioIcon],svg[carbon-mobile-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 12h2v3h-2zm-4-5h2v13h-2zm-4 4h2v5h-2zm-4-2h2v9h-2zm-4 3h2v3h-2z"></svg:path><svg:circle cx="13.5" cy="24.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20 30H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h13v2H7v24h13v-4h2v4a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonMobileAudioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
