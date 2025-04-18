import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiZeroSolidIcon],svg[mynaui-zero-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.875 7.75A2.375 2.375 0 0 0 9.5 10.125v3.75a2.375 2.375 0 1 0 4.75 0v-3.75a2.375 2.375 0 0 0-2.375-2.375M8 10.125a3.875 3.875 0 0 1 7.75 0v3.75a3.875 3.875 0 0 1-7.75 0z"></svg:path>`,
})
export class MynauiZeroSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
