import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadVertical2Icon],svg[streamline-arrow-reload-vertical-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 9.25L3.25 7L1 9.25m7.5-4.5L10.75 7L13 4.75"></svg:path><svg:path d="M3.25 7v4.5a2 2 0 0 0 2 2h3.5a2 2 0 0 0 2-2V10m0-3V2.5a2 2 0 0 0-2-2h-3.5a2 2 0 0 0-2 2V4"></svg:path></svg:g>`,
})
export class StreamlineArrowReloadVertical2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
