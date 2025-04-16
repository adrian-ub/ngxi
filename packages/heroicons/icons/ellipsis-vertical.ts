import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsEllipsisVerticalIcon],svg[heroicons-ellipsis-vertical-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class HeroiconsEllipsisVerticalIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
