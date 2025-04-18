import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLayoutWindow11Icon],svg[streamline-layout-window-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.625.507v12.99m0-6.497H.5m0 5.5v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1"></svg:path>`,
})
export class StreamlineLayoutWindow11Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
