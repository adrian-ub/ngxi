import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelCloudIcon],svg[raphael-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.345 13.904a6.25 6.25 0 0 0-6.22-6.84a6.24 6.24 0 0 0-5.847 4.058a3.2 3.2 0 0 0-2.372-1.06a3.22 3.22 0 0 0-3.22 3.22c0 .21.024.415.063.613c-2.373.39-4.188 2.436-4.188 4.918a5 5 0 0 0 5 5h15.875a4.998 4.998 0 0 0 .908-9.91z"></svg:path>`,
})
export class RaphaelCloudIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
