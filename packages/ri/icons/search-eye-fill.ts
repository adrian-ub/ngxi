import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSearchEyeFillIcon],svg[ri-search-eye-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-5.853-9.44a4 4 0 1 0 2.646 2.646a2 2 0 1 1-2.646-2.647"></svg:path>`,
})
export class RiSearchEyeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
