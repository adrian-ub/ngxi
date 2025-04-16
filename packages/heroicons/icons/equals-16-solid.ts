import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsEquals16SolidIcon],svg[heroicons-equals-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75m0 6.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsEquals16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
