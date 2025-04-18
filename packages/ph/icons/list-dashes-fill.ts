import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phListDashesFillIcon],svg[ph-list-dashes-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 184h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 0 16m0-48h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 0 16m0-48h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 0 16m120 96h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16m0-48h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16m0-48h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListDashesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
