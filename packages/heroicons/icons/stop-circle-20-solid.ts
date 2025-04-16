import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsStopCircle20SolidIcon],svg[heroicons-stop-circle-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m5-2.25A.75.75 0 0 1 7.75 7h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsStopCircle20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
