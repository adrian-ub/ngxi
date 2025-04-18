import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsGrabIcon],svg[pepicons-grab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 8a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2h-15Zm0 3.25a1 1 0 1 1 0-2h15a1 1 0 1 1 0 2h-15Zm0 3.25a1 1 0 1 1 0-2h15a1 1 0 1 1 0 2h-15Z"></svg:path>`,
})
export class PepiconsGrabIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
