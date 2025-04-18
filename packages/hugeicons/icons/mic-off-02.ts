import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMicOff02Icon],svg[hugeicons-mic-off-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2 2l20 20M4 11a8 8 0 0 0 8 8m0 0c1.954 0 3.745-.7 5.135-1.865M12 19v3m0 0h3m-3 0H9m11-11c0 1.651-.5 3.186-1.358 4.46M7 6.98V11a5 5 0 0 0 5 5c1.135 0 2.165-.39 3.004-1.028m1.435-1.728c.358-.69.561-1.413.561-2.244V6.98C17 4.219 14.761 2 12 2c-1.869 0-3.47.965-4.328 2.484" color="currentColor"></svg:path>`,
})
export class HugeiconsMicOff02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
