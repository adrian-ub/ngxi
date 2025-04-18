import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePiSymbolCircleIcon],svg[streamline-pi-symbol-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.25A6.25 6.25 0 1 0 7 .75a6.25 6.25 0 0 0 0 12.5"></svg:path><svg:path d="M4 5.75c.088-.333.43-.872 1.053-1C5.832 4.59 10 4 10 4"></svg:path><svg:path d="M6 4.594C6 5.844 5.98 8.737 5 10m3.5-5.781v5.255c0 .175.12.526.6.526s.8-.351.9-.526"></svg:path></svg:g>`,
})
export class StreamlinePiSymbolCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
