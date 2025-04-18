import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riReplay5FillIcon],svg[ri-replay-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10a9.98 9.98 0 0 0-7.553 3.446L2 3v6h6L5.865 6.865A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10m-7.5-2V8.5h-5v4.25h3.125a.625.625 0 1 1 0 1.25H9.5v1.5h3.125a2.125 2.125 0 0 0 0-4.25H11V10z"></svg:path>`,
})
export class RiReplay5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
