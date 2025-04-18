import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsSortHighToLowIcon],svg[lineicons-sort-high-to-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.504 3.25a.75.75 0 0 0 0 1.5H20.5a.75.75 0 0 0 0-1.5zm0 12.167a.75.75 0 0 1 0-1.5H17.5a.75.75 0 0 1 0 1.5zM16 20.75h-2.496a.75.75 0 0 1 0-1.5H16a.75.75 0 0 1 0 1.5m-2.496-10.667H19a.75.75 0 0 0 0-1.5h-5.496a.75.75 0 0 0 0 1.5M8.252 18.19l1.722-1.72a.75.75 0 0 1 1.06 1.06l-3.002 3a.75.75 0 0 1-1.06 0l-3.002-3a.75.75 0 0 1 1.06-1.06l1.722 1.72V4.5a.75.75 0 1 1 1.5 0z"></svg:path>`,
})
export class LineiconsSortHighToLowIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
