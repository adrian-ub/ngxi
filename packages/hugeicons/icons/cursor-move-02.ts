import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorMove02Icon],svg[hugeicons-cursor-move-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466M22 17.499h-3m3 0c0-.256-.828-1.169-1.134-1.499M22 17.499c0 .257-.828 1.2-1.134 1.501M13 17.502h3m-3 0c0 .255.828 1.168 1.134 1.498M13 17.502c0-.258.828-1.2 1.134-1.502m3.365-3v3m0-3c-.256 0-1.169.828-1.499 1.134M17.499 13c.257 0 1.2.828 1.501 1.134M17.502 22v-3m0 3c.255 0 1.168-.828 1.498-1.134M17.502 22c-.258 0-1.2-.828-1.502-1.134" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorMove02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
