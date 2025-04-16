import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsListmonkIcon],svg[simple-icons-listmonk-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0m0 5.195A6.805 6.805 0 0 1 18.805 12A6.805 6.805 0 0 1 12 18.805A6.805 6.805 0 0 1 5.195 12A6.805 6.805 0 0 1 12 5.195"></svg:path>`,
})
export class SimpleIconsListmonkIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
