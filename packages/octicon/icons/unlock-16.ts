import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconUnlock16Icon],svg[octicon-unlock-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 4v2h7A1.5 1.5 0 0 1 14 7.5v6a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5v-6A1.5 1.5 0 0 1 3.499 6H4V4a4 4 0 0 1 7.371-2.154a.75.75 0 0 1-1.264.808A2.5 2.5 0 0 0 5.5 4m-2 3.5v6h9v-6z"></svg:path>`,
})
export class OcticonUnlock16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
