import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTagChevronBoldIcon],svg[ph-tag-chevron-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250 121.34l-45.64-68.43A20 20 0 0 0 187.72 44H32a12 12 0 0 0-10 18.66L65.58 128L22 193.34A12 12 0 0 0 32 212h155.72a20 20 0 0 0 16.64-8.91L250 134.66a12 12 0 0 0 0-13.32M185.58 188H54.42L90 134.66a12 12 0 0 0 0-13.32L54.42 68h131.16l40 60Z"></svg:path>`,
})
export class PhTagChevronBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
