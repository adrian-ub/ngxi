import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle4FilledIcon],svg[tdesign-castle-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2h8v20h-9v-5h-2v5H2V2h8v6.342q.483-.172 1-.259V7h2v1.083q.517.088 1 .259zM6 14c0-1.778.774-3.374 2-4.472V4H4v16h2zm10-4.472A6 6 0 0 1 18 14v6h2V4h-4zM8.126 13h7.748a4.004 4.004 0 0 0-6.273-2.2A4 4 0 0 0 8.126 13"></svg:path>`,
})
export class TdesignCastle4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
