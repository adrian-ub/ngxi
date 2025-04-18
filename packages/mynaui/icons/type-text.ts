import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTypeTextIcon],svg[mynaui-type-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.53 20L7.764 4L3 20m1.596-5.03h6.337m4.244-3.03C16.765 10.933 21 9.925 21 13.451V20m0-5.541c-1.588.504-6.353.504-6.353 3.526c0 3.023 4.765 2.015 6.353-.504"></svg:path>`,
})
export class MynauiTypeTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
