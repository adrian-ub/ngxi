import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsWindow16SolidIcon],svg[heroicons-window-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2m1.5-5.5V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6.5A.5.5 0 0 0 12 6H4a.5.5 0 0 0-.5.5m.75-1.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M7 4a.75.75 0 1 1-1.5 0A.75.75 0 0 1 7 4m1.25.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsWindow16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
