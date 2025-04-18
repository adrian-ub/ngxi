import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBloggerBIcon],svg[la-blogger-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7a6 6 0 0 0-6 6v7a6 6 0 0 0 6 6h7a6 6 0 0 0 6-6v-5a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1a6 6 0 0 0-6-6zm0 5h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1m0 7h7c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class LaBloggerBIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
