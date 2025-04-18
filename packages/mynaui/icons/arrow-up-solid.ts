import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpSolidIcon],svg[mynaui-arrow-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.513 9.578a.75.75 0 0 1 .034 1.06H12.75V19.5a.75.75 0 0 1-1.5 0v-8.862H5.453a.75.75 0 0 1 .034-1.06l6-5.625a.75.75 0 0 1 1.026 0z"></svg:path>`,
})
export class MynauiArrowUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
