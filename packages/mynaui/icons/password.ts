import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiPasswordIcon],svg[mynaui-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.5 9l-3 6m0-6l3 6m-3.75-3h4.5m-7.5-3l-3 6m0-6l3 6M3 12h4.5m12.75-3l-3 6m0-6l3 6m-3.75-3H21"></svg:path>`,
})
export class MynauiPasswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
