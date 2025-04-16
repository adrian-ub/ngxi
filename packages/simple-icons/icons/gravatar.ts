import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGravatarIcon],svg[simple-icons-gravatar-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0a2.4 2.4 0 0 0-2.4 2.4v8.4c0 1.324 1.074 2.398 2.4 2.398s2.4-1.074 2.4-2.398V5.21a7.2 7.2 0 0 1 4.799 6.789a7.2 7.2 0 1 1-12.29-5.09a2.4 2.4 0 1 0-3.396-3.396A11.98 11.98 0 0 0 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0"></svg:path>`,
})
export class SimpleIconsGravatarIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
