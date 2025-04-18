import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTeaCupIcon],svg[streamline-tea-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 4h8.5v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V4.5A.5.5 0 0 1 2 4M.5 13.5h13m-3-9.5h1a2 2 0 0 1 0 4h-1M3 .5v1m5-1v1M5.5.5v1"></svg:path>`,
})
export class StreamlineTeaCupIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
