import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsToggltrackIcon],svg[simple-icons-toggltrack-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0a12 12 0 1 0 0 24a12 12 0 0 0 0-24m-.883 4.322h1.766v8.757h-1.766zm-.74 2.053v1.789a4.448 4.448 0 1 0 3.247 0V6.375a6.146 6.146 0 1 1-5.669 10.552a6.145 6.145 0 0 1 2.421-10.552z"></svg:path>`,
})
export class SimpleIconsToggltrackIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
