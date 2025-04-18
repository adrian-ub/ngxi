import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsGrabPrintIcon],svg[pepicons-grab-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3.5 8a1 1 0 0 1 0-2h14.423a1 1 0 1 1 0 2H3.5Zm0 3.75a1 1 0 1 1 0-2h14.423a1 1 0 1 1 0 2H3.5Zm0 3.25a1 1 0 1 1 0-2h14.423a1 1 0 1 1 0 2H3.5Z" opacity=".8"></svg:path><svg:path d="M2.5 7a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1h-15Zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1h-15Zm0 3.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1h-15Z"></svg:path></svg:g>`,
})
export class PepiconsGrabPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
