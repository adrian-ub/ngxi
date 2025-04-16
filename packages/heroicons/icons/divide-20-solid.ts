import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsDivide20SolidIcon],svg[heroicons-divide-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 4a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M3 10a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10m7 7.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path>`,
})
export class HeroiconsDivide20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
