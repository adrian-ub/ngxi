import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGiftIcon],svg[streamline-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 3h-11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m0 4v5.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V7M7 3v10.5m3-13L7 3L4 .5"></svg:path>`,
})
export class StreamlineGiftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
