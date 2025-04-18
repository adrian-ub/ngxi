import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirRefreshIcon],svg[iconoir-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.888 13.5C21.164 18.311 17.013 22 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c4.1 0 7.625 2.468 9.168 6"></svg:path><svg:path d="M17 8h4.4a.6.6 0 0 0 .6-.6V3"></svg:path></svg:g>`,
})
export class IconoirRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
