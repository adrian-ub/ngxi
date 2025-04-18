import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNewspaperBoldIcon],svg[ph-newspaper-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 108a12 12 0 0 1 12-12h72a12 12 0 0 1 0 24h-72a12 12 0 0 1-12-12m12 52h72a12 12 0 0 0 0-24h-72a12 12 0 0 0 0 24m132-96v120a28 28 0 0 1-28 28H36a32 32 0 0 1-32-32V88a12 12 0 0 1 24 0v92a8 8 0 0 0 16 0V64a20 20 0 0 1 20-20h152a20 20 0 0 1 20 20m-24 4H68v112a32 32 0 0 1-1 8h141a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhNewspaperBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
