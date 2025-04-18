import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiPaintIcon],svg[mynaui-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 5.5h1c1.105 0 2 .395 2 1.5v2a2 2 0 0 1-2 2h-7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1m5-15.5V4a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z"></svg:path>`,
})
export class MynauiPaintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
