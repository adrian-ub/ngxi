import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiError02Icon],svg[hugeicons-wifi-error-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 17a5 5 0 0 1 1.44-1m6.06 1a5 5 0 0 0-1.44-1m4.19-2a10 10 0 0 0-3.5-2m-9.5 2A11 11 0 0 1 9 12.046M2 11c1.922-1.623 3.942-2.865 6-3.5M22 11c-1.922-1.623-3.942-2.865-6-3.5M12 20h.012m1.574-15.673c-.928-.436-2.244-.436-3.172 0c-.329.154-.459.518-.4.865L12 17l1.986-11.808c.059-.347-.071-.71-.4-.865" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiError02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
