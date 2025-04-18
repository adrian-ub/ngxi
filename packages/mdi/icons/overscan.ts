import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiOverscanIcon],svg[mdi-overscan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5L10 8h4zm6 4.5v4l2.5-2zM6 10l-2.5 2L6 14zm8 6h-4l2 2.5zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18z"></svg:path>`,
})
export class MdiOverscanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
