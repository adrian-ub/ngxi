import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMirrorIcon],svg[hugeicons-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 15V7a5 5 0 0 1 10 0v8c0 1.655-.345 2-2 2H9c-1.655 0-2-.345-2-2m3-9l1-1m0 3.5l2-2M20 8v14M4 8v14m0-2h16M4 12h3m10 0h3" color="currentColor"></svg:path>`,
})
export class HugeiconsMirrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
