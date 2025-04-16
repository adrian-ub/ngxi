import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsDocusignIcon],svg[simple-icons-docusign-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.517 3.31h4.966v6.621h3.31L12 16.552L6.207 9.931h3.31zM0 19.034h24v1.655H0z"></svg:path>`,
})
export class SimpleIconsDocusignIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
