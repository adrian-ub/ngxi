import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsLockClosed20SolidIcon],svg[heroicons-lock-closed-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1m3 8V5.5a3 3 0 1 0-6 0V9z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsLockClosed20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
