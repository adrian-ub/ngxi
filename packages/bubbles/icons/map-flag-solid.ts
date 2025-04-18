import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesMapFlagSolidIcon],svg[bubbles-map-flag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.982 4.469a.29.29 0 0 1 0-.366l2.248-2.697A.857.857 0 0 0 12.57 0H3.43a.857.857 0 0 0-.858.857v14.286a.857.857 0 1 0 1.715 0V8.857a.286.286 0 0 1 .285-.286h8a.857.857 0 0 0 .659-1.405z"></svg:path>`,
})
export class BubblesMapFlagSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
