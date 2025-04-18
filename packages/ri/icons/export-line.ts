import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExportLineIcon],svg[ri-export-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1zM4 15h3.416a5.001 5.001 0 0 0 9.168 0H20v4H4zM4 5h16v8h-5a3 3 0 1 1-6 0H4zm12 6h-3v3h-2v-3H8l4-4.5z"></svg:path>`,
})
export class RiExportLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
