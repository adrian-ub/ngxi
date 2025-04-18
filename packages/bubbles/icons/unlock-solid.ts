import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesUnlockSolidIcon],svg[bubbles-unlock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6.333h-.5V4.5a4.501 4.501 0 0 0-8.811-1.293a.833.833 0 1 0 1.596.478a2.834 2.834 0 0 1 5.548.815V6a.333.333 0 0 1-.333.333H3a1.333 1.333 0 0 0-1.333 1.334v7A1.333 1.333 0 0 0 3 16h10a1.333 1.333 0 0 0 1.333-1.333v-7A1.334 1.334 0 0 0 13 6.333m-5 6a1.333 1.333 0 1 1 0-2.666a1.333 1.333 0 0 1 0 2.666"></svg:path>`,
})
export class BubblesUnlockSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
