import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFlashOffIcon],svg[streamline-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5l13 13M5.19 5.19L8.5.5V5h3L8.81 8.81m-1.66 2.35L5.5 13.5V9h-3l1.41-2"></svg:path>`,
})
export class StreamlineFlashOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
