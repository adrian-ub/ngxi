import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLadleIcon],svg[tabler-ladle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 14v1a6 6 0 1 0 12 0V6a3 3 0 0 1 6 0"></svg:path><svg:path d="M9 16c-.663 0-1.3-.036-1.896-.102l-.5-.064C4.481 15.526 3 14.821 3 14c0-.82 1.482-1.526 3.603-1.834l.5-.064A17 17 0 0 1 9 12c.663 0 1.3.036 1.896.102l.5.064C13.519 12.474 15 13.179 15 14c0 .82-1.482 1.526-3.603 1.834l-.5.064A17 17 0 0 1 9 16"></svg:path></svg:g>`,
})
export class TablerLadleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
