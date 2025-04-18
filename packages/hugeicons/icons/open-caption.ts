import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsOpenCaptionIcon],svg[hugeicons-open-caption-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 10.5c0-3.316 0-4.975 1.053-6.082q.253-.265.554-.49C4.862 3 6.741 3 10.5 3h3c3.759 0 5.638 0 6.892.929q.302.223.555.49C22 5.524 22 7.183 22 10.5s0 4.975-1.053 6.082q-.253.265-.555.49C19.138 18 17.26 18 13.5 18h-3c-3.759 0-5.638 0-6.893-.929a4.3 4.3 0 0 1-.554-.49C2 15.476 2 13.817 2 10.5"></svg:path><svg:path d="M10.5 7.5H10c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C7 9.102 7 9.568 7 10.5s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.367.152.833.152 1.765.152h.5m6.5-6h-.5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.152.367-.152.833-.152 1.765s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.367.152.833.152 1.765.152h.5M2 21h20"></svg:path></svg:g>`,
})
export class HugeiconsOpenCaptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
