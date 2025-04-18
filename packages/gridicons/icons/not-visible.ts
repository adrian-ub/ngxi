import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsNotVisibleIcon],svg[gridicons-not-visible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12s4.188-6 11-6c.947 0 1.839.121 2.678.322L8.36 12.64A4 4 0 0 1 8 11c0-.937.335-1.787.875-2.469c-2.392.812-4.214 2.385-5.254 3.469a15 15 0 0 0 2.98 2.398l-1.453 1.453C2.497 14.13 1 12 1 12m22 0s-4.188 6-11 6c-.946 0-1.836-.124-2.676-.323L5 22l-1.5-1.5l17-17L22 5l-3.147 3.147C21.501 9.869 23 12 23 12m-2.615.006a14.8 14.8 0 0 0-2.987-2.403L16 11a4 4 0 0 1-4 4l-.947.947c.31.031.624.053.947.053c3.978 0 6.943-2.478 8.385-3.994"></svg:path>`,
})
export class GridiconsNotVisibleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
