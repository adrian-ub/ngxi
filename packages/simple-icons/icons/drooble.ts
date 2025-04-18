import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsDroobleIcon],svg[simple-icons-drooble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 11.986a7.6 7.6 0 0 0-7-7.559v7.574a5 5 0 0 1-10 0c0-3.604 3.707-6.022 7-4.583V.17C6.615-1.069 0 4.63 0 12c0 6.628 5.373 12 12 12c6.628 0 12-5.372 12-12zm-14 .015a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14-.015a7.6 7.6 0 0 0-7-7.559v7.574a5 5 0 0 1-10 0c0-3.604 3.707-6.022 7-4.583V.17C6.615-1.069 0 4.63 0 12c0 6.628 5.373 12 12 12c6.628 0 12-5.372 12-12zm-14 .015a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path>`,
})
export class SimpleIconsDroobleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
