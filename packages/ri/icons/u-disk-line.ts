import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUDiskLineIcon],svg[ri-u-disk-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12H5v8h14zM5 10V2h14v8h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1zm2 0h10V4H7zm2-4h2v2H9zm4 0h2v2h-2z"></svg:path>`,
})
export class RiUDiskLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
