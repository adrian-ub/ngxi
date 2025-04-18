import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsZoomOutIcon],svg[proicons-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.56 10.56h6m1.993 4.993a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20"></svg:path><svg:path d="M15.553 5.568a7.06 7.06 0 1 1-9.985 9.985a7.06 7.06 0 0 1 9.985-9.985"></svg:path></svg:g>`,
})
export class ProiconsZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
