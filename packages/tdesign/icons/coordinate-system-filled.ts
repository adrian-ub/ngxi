import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCoordinateSystemFilledIcon],svg[tdesign-coordinate-system-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.258 20.5H.74L12 1zm-10.259-7.968V9h-2v3.532l-3.408 2.84l1.28 1.536L12 14.302l3.128 2.606l1.28-1.536z"></svg:path>`,
})
export class TdesignCoordinateSystemFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
