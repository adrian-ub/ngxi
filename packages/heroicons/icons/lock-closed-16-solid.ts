import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsLockClosed16SolidIcon],svg[heroicons-lock-closed-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1m2 6V4.5a2 2 0 1 0-4 0V7z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsLockClosed16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
