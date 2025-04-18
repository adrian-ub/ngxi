import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAutomotiveBattery02Icon],svg[hugeicons-automotive-battery-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 5.5H8c-2.828 0-4.243 0-5.121.879C2 7.257 2 8.672 2 11.5V15c0 2.828 0 4.243.879 5.121C3.757 21 5.172 21 8 21h8c2.828 0 4.243 0 5.121-.879C22 19.243 22 17.828 22 15v-3.5c0-2.828 0-4.243-.879-5.121C20.243 5.5 18.828 5.5 16 5.5"></svg:path><svg:path d="M12.5 9L10 13h4l-2.5 4M9 5.5v-.75c0-.702 0-1.053-.169-1.306a1 1 0 0 0-.275-.275C8.303 3 7.952 3 7.25 3s-1.053 0-1.306.169a1 1 0 0 0-.275.275C5.5 3.697 5.5 4.048 5.5 4.75v.75m13 0v-.75c0-.702 0-1.053-.169-1.306a1 1 0 0 0-.275-.275C17.803 3 17.452 3 16.75 3s-1.053 0-1.306.169a1 1 0 0 0-.276.275C15 3.697 15 4.048 15 4.75v.75"></svg:path></svg:g>`,
})
export class HugeiconsAutomotiveBattery02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
