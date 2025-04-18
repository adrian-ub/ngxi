import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifi02Icon],svg[hugeicons-wifi-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 18.5h.012m-3.762-3c2-2 5.5-2 7.5 0m2.75-3c-3.768-3.333-9-3.333-13 0"></svg:path><svg:path d="M2 9.5c6.316-5.333 13.684-5.333 20 0"></svg:path></svg:g>`,
})
export class HugeiconsWifi02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
