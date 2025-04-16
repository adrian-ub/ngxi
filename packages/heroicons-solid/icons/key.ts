import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidKeyIcon],svg[heroicons-solid-key-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 8a6 6 0 0 1-7.743 5.743L10 14l-1 1l-1 1H6v2H2v-4l4.257-4.257A6 6 0 1 1 18 8m-6-4a1 1 0 1 0 0 2a2 2 0 0 1 2 2a1 1 0 1 0 2 0a4 4 0 0 0-4-4" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidKeyIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
