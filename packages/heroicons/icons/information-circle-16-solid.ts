import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsInformationCircle16SolidIcon],svg[heroicons-information-circle-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M9 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsInformationCircle16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
