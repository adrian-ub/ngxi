import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamGamepadRetroFIcon],svg[jam-gamepad-retro-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V4a1 1 0 1 0-2 0v1H4a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V7h1a1 1 0 1 0 0-2zM6 0h12a6 6 0 1 1-4.472 10h-3.056A6 6 0 1 1 6 0m12 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamGamepadRetroFIcon {
  readonly viewBox = input("0 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
