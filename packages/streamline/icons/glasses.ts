import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGlassesIcon],svg[streamline-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9h-5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1zm8 0h-5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1zm-8 0h3m5 0V3a2 2 0 0 0-2-2h-1M.5 9V3a2 2 0 0 1 2-2h1"></svg:path>`,
})
export class StreamlineGlassesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
