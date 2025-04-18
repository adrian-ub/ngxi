import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineYinYangSymbolIcon],svg[streamline-yin-yang-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M7 .5S2.93 4.09 7 7c3.5 2.5 0 6.5 0 6.5m2-8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M5 10.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class StreamlineYinYangSymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
