import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsTag16SolidIcon],svg[heroicons-tag-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v2.879a2.5 2.5 0 0 0 .732 1.767l4.5 4.5a2.5 2.5 0 0 0 3.536 0l2.878-2.878a2.5 2.5 0 0 0 0-3.536l-4.5-4.5A2.5 2.5 0 0 0 7.38 2zM5 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsTag16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
