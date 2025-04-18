import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTiktokIcon],svg[streamline-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.422 9.717V1.141m0 8.58a2.893 2.893 0 1 1-2.893-2.893M8.422 1.14a4.29 4.29 0 0 0 4.288 4.29"></svg:path>`,
})
export class StreamlineTiktokIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
