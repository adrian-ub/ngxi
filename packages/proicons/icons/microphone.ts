import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMicrophoneIcon],svg[proicons-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.801 6.449a3.199 3.199 0 1 1 6.398 0v4.95a3.199 3.199 0 0 1-6.398 0zM12 18.181a6.78 6.78 0 0 1-6.779-6.779M12 18.182a6.78 6.78 0 0 0 6.779-6.78M12 18.182v2.568"></svg:path>`,
})
export class ProiconsMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
