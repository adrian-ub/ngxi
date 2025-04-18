import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsHashPrintIcon],svg[pepicons-hash-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-width="3" d="M5.5 8.75h11m-11 5.5h11M8.75 5l-1 12m6.5-12l-1 12" opacity=".8"></svg:path><svg:path d="M3.5 7.75h13m-13 5.5h13M7.75 4l-1 12m6.5-12l-1 12"></svg:path></svg:g>`,
})
export class PepiconsHashPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
