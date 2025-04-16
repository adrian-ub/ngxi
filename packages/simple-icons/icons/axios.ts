import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAxiosIcon],svg[simple-icons-axios-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.068 2.9v19.397L8.954 24V7.864H4.975zM14.934 0v15.767h4.091l-6.2 5.089V1.469z"></svg:path>`,
})
export class SimpleIconsAxiosIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
