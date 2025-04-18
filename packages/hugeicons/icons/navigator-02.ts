import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNavigator02Icon],svg[hugeicons-navigator-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 4H3m18 16H3M7.135 9.661C9.045 10.671 10 11.176 10 12s-.955 1.33-2.865 2.339l-1.301.688c-1.467.775-2.2 1.163-2.553.881a.8.8 0 0 1-.229-.292c-.206-.432.21-1.225 1.042-2.812c.184-.352.277-.528.293-.72a1 1 0 0 0 0-.168c-.016-.192-.109-.368-.293-.72c-.832-1.587-1.248-2.38-1.042-2.812a.8.8 0 0 1 .229-.292c.353-.282 1.086.106 2.553.881zM21 12h-2m-4 0h-2" color="currentColor"></svg:path>`,
})
export class HugeiconsNavigator02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
