import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCopyIcon],svg[icomoon-free-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4V0H3L0 3v9h6v4h10V4zM3 1.414V3H1.414zM1 11V4h3V1h5v3L6 7v4zm8-5.586V7H7.414zM15 15H7V8h3V5h5z"></svg:path>`,
})
export class IcomoonFreeCopyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
