import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTwoCircleIcon],svg[mynaui-two-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M9.5 10.337c0-3.116 4.615-3.116 4.615 0c0 2.352-3.015 4.38-4.615 5.663c0 0 3-.5 5 0"></svg:path></svg:g>`,
})
export class MynauiTwoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
