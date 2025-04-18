import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineManualBookIcon],svg[streamline-manual-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 4.054a1.5 1.5 0 1 1 1.5 1.5v.5m0 2.062a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path><svg:path d="M12.5 13.5H3a1.5 1.5 0 1 1 0-3h8.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H3a1.5 1.5 0 0 0-1.5 1.46v10m10-1.46v3"></svg:path></svg:g>`,
})
export class StreamlineManualBookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
