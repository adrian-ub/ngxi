import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiNineIcon],svg[mynaui-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 17h1.25A3.75 3.75 0 0 0 15 13.25v-3.125m0 0a3.125 3.125 0 1 0-6.25 0c0 1.726 1.4 2.5 3.125 2.5S15 11.851 15 10.125"></svg:path>`,
})
export class MynauiNineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
