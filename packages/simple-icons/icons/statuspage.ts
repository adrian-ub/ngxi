import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsStatuspageIcon],svg[simple-icons-statuspage-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.008 9.597a5.623 5.623 0 1 1 0 11.245a5.623 5.623 0 0 1 0-11.245M.154 8.717l3.02 3.574a.64.64 0 0 0 .913.068c4.885-4.379 10.97-4.379 15.84 0a.64.64 0 0 0 .916-.068l3.006-3.574a.646.646 0 0 0-.075-.906c-7.1-6.204-16.462-6.204-23.555 0a.65.65 0 0 0-.065.906"></svg:path>`,
})
export class SimpleIconsStatuspageIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
