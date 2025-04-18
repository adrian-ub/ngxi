import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesComputerKeyboardNextSolidIcon],svg[bubbles-computer-keyboard-next-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.447 9.076a.45.45 0 0 1-.145.27a.45.45 0 0 1-.198.126c-.035.013-.159.014-4.413.015l-4.378.002l.933.934l.934.934l.033.069a.49.49 0 0 1-.008.46a.493.493 0 0 1-.65.2l-.061-.029l-1.39-1.39C5.746 9.31 5.712 9.275 5.686 9.223a.45.45 0 0 1-.051-.224a.45.45 0 0 1 .05-.223c.027-.052.06-.087 1.414-1.44C8.612 5.822 8.51 5.918 8.634 5.88a.4.4 0 0 1 .14-.017c.1 0 .161.015.242.06a.6.6 0 0 1 .189.188a.49.49 0 0 1 .008.461l-.033.068l-.934.935l-.933.934l4.378.002c4.254.001 4.378.002 4.413.015a.45.45 0 0 1 .198.127a.43.43 0 0 1 .129.204a.6.6 0 0 1 .015.218m-13.92 7.576a.5.5 0 0 1-.118.237a.485.485 0 0 1-.714.018a.4.4 0 0 1-.09-.126a1 1 0 0 1-.043-.106c-.014-.06-.014-15.292 0-15.35a1 1 0 0 1 .042-.107a.5.5 0 0 1 .309-.256a.497.497 0 0 1 .6.322l.019.058l.001 7.64c0 4.304-.002 7.653-.005 7.67" clip-rule="evenodd"></svg:path>`,
})
export class BubblesComputerKeyboardNextSolidIcon {
  readonly viewBox = input("0 0 18 18")
  readonly width = input("1em")
  readonly height = input("1em")
}
