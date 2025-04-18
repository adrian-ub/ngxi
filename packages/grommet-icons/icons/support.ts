import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSupportIcon],svg[grommet-icons-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4.222 19.778c4.296 4.296 11.26 4.296 15.556 0s4.296-11.26 0-15.556s-11.26-4.296-15.556 0s-4.296 11.26 0 15.556ZM6.343 21.9l4.243-4.242m-8.485 0l4.242-4.243m11.314-2.828l4.242-4.243m-8.485 0l4.243-4.242m-9.9 14.142a6 6 0 1 0 8.486-8.486a6 6 0 0 0-8.486 8.486Zm-5.656-9.9l4.242 4.243m0-8.485l4.243 4.242m2.828 11.314l4.243 4.242m0-8.485l4.242 4.243"></svg:path>`,
})
export class GrommetIconsSupportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
