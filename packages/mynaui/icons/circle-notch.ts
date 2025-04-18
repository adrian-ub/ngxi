import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleNotchIcon],svg[mynaui-circle-notch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.717 4A9.05 9.05 0 0 0 3 11.956C3 16.951 7.03 21 12 21s9-4.05 9-9.044A9.05 9.05 0 0 0 16.283 4"></svg:path>`,
})
export class MynauiCircleNotchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
