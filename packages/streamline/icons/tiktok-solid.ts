import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTiktokSolidIcon],svg[streamline-tiktok-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.422 1.14a1 1 0 0 0-2 0v8.58a1.893 1.893 0 1 1-1.893-1.892a1 1 0 1 0 0-2a3.893 3.893 0 1 0 3.893 3.893V5.283a5.27 5.27 0 0 0 3.288 1.146a1 1 0 1 0 0-2a3.29 3.29 0 0 1-3.288-3.288Z"></svg:path>`,
})
export class StreamlineTiktokSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
