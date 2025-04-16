import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsEllipsisVerticalSolidIcon],svg[heroicons-ellipsis-vertical-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m0 6a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m0 6a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsEllipsisVerticalSolidIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
