import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeQuarterPassIcon],svg[hugeicons-time-quarter-pass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.376 3q-.322.12-.631.261m12.973 13.04q.153-.332.282-.676m-2.501 3.74q.258-.24.497-.499m-3.727 2.506q.291-.11.573-.237m-3.686.859q-.346.012-.694 0m-3.675-.854q.272.123.551.228m-3.665-2.447q.204.217.423.422m-2.463-3.678q.113.296.243.583m-.871-3.743a10 10 0 0 1 0-.626m.62-3.142q.111-.293.24-.577m1.791-2.68q.217-.232.449-.449M13.5 12a1.5 1.5 0 1 1-1.5-1.5m1.5 1.5a1.5 1.5 0 0 0-1.5-1.5m1.5 1.5H16m-4-1.5V6m10 6c0-5.523-4.477-10-10-10" color="currentColor"></svg:path>`,
})
export class HugeiconsTimeQuarterPassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
