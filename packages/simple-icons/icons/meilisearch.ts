import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMeilisearchIcon],svg[simple-icons-meilisearch-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.505 18.998l4.434-11.345a4.17 4.17 0 0 1 3.882-2.651h2.674l-4.434 11.345a4.17 4.17 0 0 1-3.883 2.651zm6.505 0l4.434-11.345a4.17 4.17 0 0 1 3.883-2.651H24l-4.434 11.345a4.17 4.17 0 0 1-3.882 2.651zm-13.01 0L4.434 7.653a4.17 4.17 0 0 1 3.882-2.651h2.674L6.556 16.347a4.17 4.17 0 0 1-3.883 2.651z"></svg:path>`,
})
export class SimpleIconsMeilisearchIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
