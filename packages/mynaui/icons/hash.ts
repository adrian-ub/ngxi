import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiHashIcon],svg[mynaui-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.697 4L6.678 21M17.054 4l-3.019 17M21 8.781H3m18 7.438H3"></svg:path>`,
})
export class MynauiHashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
