import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNurseFillIcon],svg[ri-nurse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.957 15.564A8.01 8.01 0 0 1 19.94 22H4.063a8.01 8.01 0 0 1 4.981-6.436L12.001 20zM18.001 2v6A6 6 0 0 1 6 8V2zm-2 6H8a4 4 0 0 0 8 0"></svg:path>`,
})
export class RiNurseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
