import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVerticalResizeIcon],svg[hugeicons-vertical-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 10h16M4 14h16m-8-4V6m-.05-4c1.035-.03 3.47 4.008 2.987 4.389c-.548.431-2.177-.6-2.695-.832c-.312-.14-.448-.136-.76.023c-1.406.717-2.11 1.075-2.414.856l-.003-.002C8.58 6.08 10.939 2.03 11.95 2m.1 20c-1.035.03-3.47-4.008-2.987-4.389c.548-.431 2.177.6 2.695.832c.312.14.448.136.76-.023c1.406-.717 2.11-1.075 2.414-.856l.003.002c.485.354-1.874 4.404-2.885 4.434M12 18v-4" color="currentColor"></svg:path>`,
})
export class HugeiconsVerticalResizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
