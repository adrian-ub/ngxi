import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsMoonIcon],svg[heroicons-moon-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.752 15.002A9.7 9.7 0 0 1 18 15.75A9.75 9.75 0 0 1 8.25 6c0-1.33.266-2.597.748-3.752A9.75 9.75 0 0 0 3 11.25A9.75 9.75 0 0 0 12.75 21a9.75 9.75 0 0 0 9.002-5.998"></svg:path>`,
})
export class HeroiconsMoonIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
