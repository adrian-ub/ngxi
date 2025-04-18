import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilRefreshOutlineIcon],svg[basil-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.545 8.163a.75.75 0 0 1-.487-1.044l1.66-3.535a.75.75 0 0 1 1.36.002l.732 1.569l.08-.027a8.15 8.15 0 1 1-5.8 5.903a.75.75 0 1 1 1.456.364a6.65 6.65 0 1 0 4.907-4.862l.74 1.583a.75.75 0 0 1-.872 1.043z"></svg:path>`,
})
export class BasilRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
