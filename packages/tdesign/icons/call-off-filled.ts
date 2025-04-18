import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCallOffFilledIcon],svg[tdesign-call-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.213 10.557l-.005-.007l1.859-1.86L9.58 2H1v1a19.9 19.9 0 0 0 3.901 11.87zM1.594 21.005l19.41-19.41L21 1.59l.004-.004L22.418 3L11.835 13.583q.763.661 1.615 1.21l1.86-1.86L22 14.42V23h-1a19.9 19.9 0 0 1-10.85-3.196a20 20 0 0 1-2.565-1.97l-4.58 4.58z"></svg:path>`,
})
export class TdesignCallOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
