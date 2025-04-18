import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSearch2FillIcon],svg[ri-search-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9s-9-4.032-9-9s4.032-9 9-9m8.485 16.071l2.829 2.828l-1.415 1.415l-2.828-2.829z"></svg:path>`,
})
export class RiSearch2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
