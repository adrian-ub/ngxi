import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerDesk02Icon],svg[hugeicons-computer-desk-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12H2m15 0V8c0-.827.173-1 1-1h1c.827 0 1 .173 1 1v4m0 5h-4c-1.886 0-2.828 0-3.414-.586S12 14.886 12 13v-1m-8 0v10m16-10v10M3 6V5c0-1.414 0-2.121.44-2.56C3.878 2 4.585 2 6 2h4c1.414 0 2.121 0 2.56.44C13 2.878 13 3.585 13 5v1c0 1.414 0 2.121-.44 2.56C12.122 9 11.415 9 10 9H6c-1.414 0-2.121 0-2.56-.44C3 8.122 3 7.415 3 6m6.5 3l.5 3M6.5 9L6 12" color="currentColor"></svg:path>`,
})
export class HugeiconsComputerDesk02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
