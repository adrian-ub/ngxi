import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsItalicIcon],svg[heroicons-italic-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.248 20.246H9.05m0 0h3.696m-3.696 0l5.893-16.502m0 0h-3.697m3.697 0h3.803"></svg:path>`,
})
export class HeroiconsItalicIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
