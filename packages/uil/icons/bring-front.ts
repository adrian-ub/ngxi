import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBringFrontIcon],svg[uil-bring-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.29 17.3L10 18.59V7a1 1 0 0 0-2 0v11.6l-1.29-1.3a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.41a1 1 0 0 0-1.42 0M22 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H4V4h16v4h-7a1 1 0 0 0 0 2h1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9Zm-2 11h-4v-4h4Z"></svg:path>`,
})
export class UilBringFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
