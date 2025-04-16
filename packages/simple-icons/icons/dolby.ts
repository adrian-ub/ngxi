import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsDolbyIcon],svg[simple-icons-dolby-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3.564v16.872h2.488c4.648 0 8.438-3.788 8.438-8.436s-3.79-8.436-8.438-8.436zm21.512 0c-4.648 0-8.438 3.788-8.438 8.436s3.79 8.436 8.438 8.436H24V3.564z"></svg:path>`,
})
export class SimpleIconsDolbyIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
