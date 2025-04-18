import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFluMaskIcon],svg[streamline-flu-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 10.25c2.5 0 3.5-1 3.5-1v-5.5h-7v5.5s1 1 3.5 1m-1-4h2m-4.5-2.5H2.268C1.29 3.75.5 4.541.5 5.518v0c0 .469.186.918.518 1.25L3.5 9.25m7-5.5h1.232c.977 0 1.768.791 1.768 1.768v0c0 .469-.186.918-.518 1.25L10.5 9.25"></svg:path>`,
})
export class StreamlineFluMaskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
