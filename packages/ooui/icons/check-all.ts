import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiCheckAllIcon],svg[ooui-check-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.29 12.71l1.42-1.42l2.22 2.22l8.3-10.14l1.54 1.26l-9.7 11.86zM12 10h5v2h-5zm-3 4h5v2H9zm6-8h5v2h-5z"></svg:path>`,
})
export class OouiCheckAllIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
