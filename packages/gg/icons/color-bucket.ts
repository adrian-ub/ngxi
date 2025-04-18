import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggColorBucketIcon],svg[gg-color-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.203 2.004c1.261 0 2.304 1.103 2.476 2.538l8.483 8.484l-7.778 7.778a3 3 0 0 1-4.243 0L2.9 16.562a3 3 0 0 1 0-4.243l2.804-2.805V4.961c0-1.633 1.12-2.957 2.5-2.957m.5 2.957v1.553l-1 1V4.961c0-.327.224-.591.5-.591c.277 0 .5.264.5.591m0 5.914V9.342l-4.39 4.391a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414 0l6.364-6.364l-5.63-5.63v3.48l-.003.128h-2.01a1 1 0 0 0 .012-.129" clip-rule="evenodd"></svg:path><svg:path d="M16.859 16.875a3 3 0 1 0 4.242 0l-2.121-2.121z"></svg:path></svg:g>`,
})
export class GgColorBucketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
