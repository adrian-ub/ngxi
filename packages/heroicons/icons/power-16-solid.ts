import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsPower16SolidIcon],svg[heroicons-power-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 8 1M4.11 3.05a.75.75 0 0 1 0 1.06a5.5 5.5 0 1 0 7.78 0a.75.75 0 0 1 1.06-1.06a7 7 0 1 1-9.9 0a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsPower16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
