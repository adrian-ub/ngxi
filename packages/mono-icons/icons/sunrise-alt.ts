import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsSunriseAltIcon],svg[mono-icons-sunrise-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 5a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0zM9.028 19H3a1 1 0 1 1 0-2h3.803a6 6 0 1 1 10.394 0H21a1 1 0 1 1 0 2zM12 10a4 4 0 0 0-2.646 7h5.292A4 4 0 0 0 12 10m7.071-1.657l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 1 1 1.414 1.414"></svg:path><svg:path d="M4 15a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2zm18-1a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M5.636 9.05A1 1 0 0 0 7.05 7.636l-.707-.707A1 1 0 1 0 4.93 8.343z"></svg:path></svg:g>`,
})
export class MonoIconsSunriseAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
