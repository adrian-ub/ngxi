import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHorizontalResizeIcon],svg[hugeicons-horizontal-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20V4m4 16V4m-4 8H6m-4 .05c-.03-1.035 4.008-3.47 4.389-2.987c.431.548-.6 2.177-.832 2.695c-.14.312-.136.448.023.76c.717 1.406 1.075 2.11.856 2.414l-.002.003C6.08 15.42 2.03 13.061 2 12.05m20-.1c.03 1.035-4.008 3.47-4.389 2.987c-.431-.548.6-2.177.832-2.695c.14-.312.136-.448-.023-.76c-.717-1.406-1.075-2.11-.856-2.414l.002-.003C17.92 8.58 21.97 10.939 22 11.95M18 12h-4" color="currentColor"></svg:path>`,
})
export class HugeiconsHorizontalResizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
