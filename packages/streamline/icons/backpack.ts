import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBackpackIcon],svg[streamline-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 3h4a2 2 0 0 1 2 2v8.5H3V5a2 2 0 0 1 2-2M3 13.5H.5v-4a1 1 0 0 1 1-1H3m8 0h1.5a1 1 0 0 1 1 1v4H11m-8-6h8m-4-1v2M5 3v-.5a2 2 0 1 1 4 0V3"></svg:path>`,
})
export class StreamlineBackpackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
