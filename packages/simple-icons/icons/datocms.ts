import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsDatocmsIcon],svg[simple-icons-datocms-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0H.076v24H12c5.964 0 11.924-5.373 11.924-11.998C23.924 5.376 17.963 0 12 0m0 17.453a5.453 5.453 0 1 1 5.455-5.451A5.45 5.45 0 0 1 12 17.452z"></svg:path>`,
})
export class SimpleIconsDatocmsIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
