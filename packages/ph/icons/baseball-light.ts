import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBaseballLightIcon],svg[ph-baseball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m67.31 161.67c-1-1.12-2-2.26-2.9-3.42a6 6 0 0 0-9.36 7.5c1.19 1.49 2.43 2.94 3.71 4.37a89.84 89.84 0 0 1-117.52 0c1.28-1.43 2.52-2.88 3.71-4.37a6 6 0 0 0-9.36-7.5c-.93 1.16-1.91 2.3-2.9 3.42a89.8 89.8 0 0 1 0-119.34c1 1.12 2 2.26 2.9 3.42A6 6 0 0 0 68.28 74A6 6 0 0 0 73 64.25a102 102 0 0 0-3.71-4.37a89.84 89.84 0 0 1 117.52 0a102 102 0 0 0-3.71 4.37a6 6 0 1 0 9.36 7.5c.93-1.16 1.91-2.3 2.9-3.42a89.8 89.8 0 0 1 0 119.34ZM93.92 145a101.4 101.4 0 0 1-4.4 17a6 6 0 1 1-11.31-4a90 90 0 0 0 3.87-15a6 6 0 1 1 11.84 2m0-34a6 6 0 0 1-4.92 6.92a7 7 0 0 1-1 .08a6 6 0 0 1-5.91-5a90 90 0 0 0-3.87-15a6 6 0 1 1 11.31-4a101.4 101.4 0 0 1 4.39 17m83.87 47a6 6 0 1 1-11.31 4a101.4 101.4 0 0 1-4.4-17a6 6 0 1 1 11.84-2a90 90 0 0 0 3.87 15m0-60a90 90 0 0 0-3.87 15a6 6 0 0 1-5.91 5a7 7 0 0 1-1-.08a6 6 0 0 1-4.93-6.91a101.4 101.4 0 0 1 4.4-17a6 6 0 1 1 11.31 4Z"></svg:path>`,
})
export class PhBaseballLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
