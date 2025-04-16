import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGooglefontsIcon],svg[simple-icons-googlefonts-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2.8A3.6 3.6 0 1 0 4 10a3.6 3.6 0 0 0 0-7.2m7.6 0v18.4h7.2a5.2 5.2 0 1 1 0-10.4a4 4 0 1 1 0-8zm7.2 0v8a4 4 0 1 0 0-8m0 8v10.4A5.2 5.2 0 0 0 24 16a5.2 5.2 0 0 0-5.2-5.2m-7.7-7.206L0 21.199h8.8l2.3-3.64Z"></svg:path>`,
})
export class SimpleIconsGooglefontsIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
