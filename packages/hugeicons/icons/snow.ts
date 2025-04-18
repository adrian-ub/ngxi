import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSnowIcon],svg[hugeicons-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 14.25l-.831-.659c-.946-.75-1.419-1.125-1.419-1.591s.473-.841 1.419-1.591L21 9.75m-18 0l.831.659c.946.75 1.419 1.125 1.419 1.591s-.473.841-1.419 1.591L3 14.25M14.572 21l.156-1.059c.178-1.205.267-1.807.674-2.042c.407-.236.972-.011 2.104.437l.994.394M9.428 3l-.156 1.059c-.178 1.205-.267 1.807-.674 2.042c-.407.236-.972.011-2.104-.437L5.5 5.27M5 18.732l1.07-.395c1.218-.448 1.827-.672 2.265-.438s.533.838.724 2.042L9.227 21M19 5.268l-1.07.394c-1.218.45-1.828.673-2.265.439s-.533-.838-.724-2.042L14.773 3M19 12H5m10.5 6l-7-12m7 0l-7 12" color="currentColor"></svg:path>`,
})
export class HugeiconsSnowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
