import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiInfinityIcon],svg[mynaui-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 9.417C14.838 8.575 15.793 8 17 8a4 4 0 0 1 0 8c-4.5 0-5.5-8-10-8a4 4 0 1 0 0 8c1.207 0 2.162-.575 3-1.417"></svg:path>`,
})
export class MynauiInfinityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
