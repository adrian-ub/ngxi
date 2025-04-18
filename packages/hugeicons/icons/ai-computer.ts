import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiComputerIcon],svg[hugeicons-ai-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.014 2c-3.778 0-5.667 0-6.84 1.172S2 6.229 2 10s0 5.657 1.174 6.828S6.236 18 10.014 18h4.007c3.778 0 5.667 0 6.84-1.172c.81-.808 1.061-1.956 1.139-3.828m-10 5v4m-4 0h8m-5-7h2"></svg:path><svg:path d="M18 4h-2c-.943 0-1.414 0-1.707.293S14 5.057 14 6v2c0 .943 0 1.414.293 1.707S15.057 10 16 10h2c.943 0 1.414 0 1.707-.293S20 8.943 20 8V6c0-.943 0-1.414-.293-1.707S18.943 4 18 4m-2.5 6v2m3-2v2m-3-10v2m3-2v2M14 5.5h-2m2 3h-2m10-3h-2m2 3h-2"></svg:path></svg:g>`,
})
export class HugeiconsAiComputerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
