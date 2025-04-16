import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsInbox16SolidIcon],svg[heroicons-inbox-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.784 3A2.25 2.25 0 0 0 2.68 4.449L1.147 8.475A2.3 2.3 0 0 0 1 9.276v1.474A2.25 2.25 0 0 0 3.25 13h9.5A2.25 2.25 0 0 0 15 10.75V9.276c0-.274-.05-.545-.147-.801l-1.534-4.026A2.25 2.25 0 0 0 11.216 3zm-.701 1.983a.75.75 0 0 1 .7-.483h6.433a.75.75 0 0 1 .701.483L13.447 9h-2.412a1 1 0 0 0-.832.445l-.406.61a1 1 0 0 1-.832.445h-1.93a1 1 0 0 1-.832-.445l-.406-.61A1 1 0 0 0 4.965 9H2.553z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsInbox16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
