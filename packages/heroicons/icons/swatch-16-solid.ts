import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSwatch16SolidIcon],svg[heroicons-swatch-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8.5a2.5 2.5 0 0 1-5 0zm3.25 8.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m8.5 11.035l3.778-3.778a1 1 0 0 0 0-1.414l-2.122-2.121a1 1 0 0 0-1.414 0l-.242.242zM7.656 14H13a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-.344z"></svg:path>`,
})
export class HeroiconsSwatch16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
