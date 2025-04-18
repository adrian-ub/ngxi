import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXiaoheiheAcceleratorIcon],svg[arcticons-xiaoheihe-accelerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.418 5.5L8.185 29.191H21.1l1.55-2.495M20.582 42.5l19.233-23.691H26.9l-1.55 2.495"></svg:path>`,
})
export class ArcticonsXiaoheiheAcceleratorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
