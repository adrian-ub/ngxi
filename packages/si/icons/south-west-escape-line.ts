import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSouthWestEscapeLineIcon],svg[si-south-west-escape-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h.6c1.33 0 2.4-1.07 2.4-2.4V8.4C18 7.07 16.93 6 15.6 6H9.4C8.07 6 7 7.07 7 8.4V9m7 1l-8 8m0 0h4m-4 0v-4"></svg:path>`,
})
export class SiSouthWestEscapeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
