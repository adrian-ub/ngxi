import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiOff02Icon],svg[hugeicons-wifi-off-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18.5h.012m-3.512-3c1.629-1.629 4.002-1.931 6-.907m-9-2.093C7 11 8.427 10.354 10 10m8.5 2.5c-1.493-1.32-3.215-2.226-5-2.5M2 9.5c1.5-1.5 2.961-2.338 4.5-3m15.5 3c-3.928-3.317-8.264-4.571-12.5-3.762M2 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiOff02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
