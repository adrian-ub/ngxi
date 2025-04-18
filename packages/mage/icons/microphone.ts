import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMicrophoneIcon],svg[mage-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.64 5.836c0-1.704-1.63-3.086-3.64-3.086S8.36 4.132 8.36 5.836v5.575c0 1.704 1.63 3.086 3.64 3.086s3.64-1.382 3.64-3.086z"></svg:path><svg:path d="M5.328 10.616a6.672 6.672 0 1 0 13.344 0M12 21.25v-3.962M8.36 21.25h7.28"></svg:path></svg:g>`,
})
export class MageMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
