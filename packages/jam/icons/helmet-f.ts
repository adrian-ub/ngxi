import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamHelmetFIcon],svg[jam-helmet-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18h2a1 1 0 0 0 1-1v-2h-3zm-2-8a3 3 0 0 0-3 3h3zm2 0v3h5v4a3 3 0 0 1-3 3h-4v-5h-3v5q-.67-.017-1-.05c-5.053-.5-9-4.764-9-9.95C0 4.477 4.477 0 10 0c5.178 0 9.437 3.936 9.949 8.98q.034.335.051 1.02zm-9 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamHelmetFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
