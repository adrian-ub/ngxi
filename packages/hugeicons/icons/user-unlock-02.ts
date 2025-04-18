import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserUnlock02Icon],svg[hugeicons-user-unlock-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m4.094-2.387V3.518c0-.838.63-1.518 1.406-1.518c.564 0 1.05.358 1.274.875M19.031 9h.938c.73 0 1.094 0 1.37-.16c.218-.125.397-.318.513-.553c.148-.299.148-.693.148-1.48c0-.788 0-1.182-.148-1.48a1.3 1.3 0 0 0-.513-.554c-.276-.16-.64-.16-1.37-.16h-.938c-.73 0-1.094 0-1.37.16a1.3 1.3 0 0 0-.513.554C17 5.625 17 6.019 17 6.807c0 .787 0 1.181.148 1.48c.116.235.295.428.513.554c.276.159.64.159 1.37.159" color="currentColor"></svg:path>`,
})
export class HugeiconsUserUnlock02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
