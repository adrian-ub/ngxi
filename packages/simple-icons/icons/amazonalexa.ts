import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAmazonalexaIcon],svg[simple-icons-amazonalexa-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 6.09 4.53 11.11 10.4 11.9v-2.4a1.59 1.59 0 0 0-1.08-1.53A8.41 8.41 0 0 1 3.6 11.8a8.37 8.37 0 0 1 8.49-8.2a8.4 8.4 0 0 1 8.31 8.71l-.01.07a9 9 0 0 1-.03.38c0 .07-.01.14-.02.2c0 .08-.01.16-.02.23l-.02.1c-1.03 6.78-9.85 10.58-9.9 10.61c.52.07 1.06.1 1.6.1c6.63 0 12-5.37 12-12S18.63 0 12 0"></svg:path>`,
})
export class SimpleIconsAmazonalexaIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
