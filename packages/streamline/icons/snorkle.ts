import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSnorkleIcon],svg[streamline-snorkle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 10.5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V.5"></svg:path><svg:path d="M10.5 5.5a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l1.17-1.75a1 1 0 0 1 1.66 0L7.5 9.5h1a2 2 0 0 0 2-2z"></svg:path></svg:g>`,
})
export class StreamlineSnorkleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
