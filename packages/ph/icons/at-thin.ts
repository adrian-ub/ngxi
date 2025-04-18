import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAtThinIcon],svg[ph-at-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 0 0 0 200c20.76 0 42.52-6.23 58.21-16.66a4 4 0 1 0-4.43-6.67C167.35 214.27 147.24 220 128 220a92 92 0 1 1 92-92c0 31.32-15 36-24 36s-24-4.68-24-36V88a4 4 0 0 0-8 0v14.75a44 44 0 1 0 2.82 45.94C171.46 163.58 181.66 172 196 172c20 0 32-16.45 32-44A100.11 100.11 0 0 0 128 28m0 136a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhAtThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
