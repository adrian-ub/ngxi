import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowSmallUp20SolidIcon],svg[heroicons-arrow-small-up-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 15a.75.75 0 0 1-.75-.75V7.612L7.29 9.77a.75.75 0 0 1-1.08-1.04l3.25-3.5a.75.75 0 0 1 1.08 0l3.25 3.5a.75.75 0 1 1-1.08 1.04l-1.96-2.158v6.638A.75.75 0 0 1 10 15" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsArrowSmallUp20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
