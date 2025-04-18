import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laThIcon],svg[la-th-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v20h26V6zm2 2h4v4H5zm6 0h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zM5 14h4v4H5zm6 0h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zM5 20h4v4H5zm6 0h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4z"></svg:path>`,
})
export class LaThIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
