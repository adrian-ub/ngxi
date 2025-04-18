import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEditOffIcon],svg[hugeicons-edit-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 15l-4.25 4.068c-1.497 1.486-2.246 2.23-3.182 2.606c-.936.377-1.965.35-4.023.294l-.28-.008c-.626-.017-.94-.025-1.121-.238c-.183-.213-.158-.542-.108-1.2l.027-.356c.14-1.85.21-2.776.56-3.608S3.58 15.051 4.79 13.7L9 9m2.5-2.326l2.574-2.789c.745-.807 1.117-1.21 1.513-1.446a3.1 3.1 0 0 1 3.103-.047c.403.224.787.616 1.555 1.4c.768.785 1.152 1.178 1.37 1.589a3.29 3.29 0 0 1-.045 3.17c-.23.404-.625.785-1.416 1.546L17.5 12.5M13 4l7 7M2 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsEditOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
