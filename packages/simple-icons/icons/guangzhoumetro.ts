import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGuangzhoumetroIcon],svg[simple-icons-guangzhoumetro-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.433 12.329A16.19 16.19 0 0 1 22.118.009L17.684 0a16.2 16.2 0 0 0-4.776 11.374V24h3.525zm-8.869 0A16.17 16.17 0 0 0 1.882.009L6.319 0a16.24 16.24 0 0 1 4.773 11.374V24H7.564z"></svg:path>`,
})
export class SimpleIconsGuangzhoumetroIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
