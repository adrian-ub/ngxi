import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudIcon],svg[mynaui-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.278 17.497c3.678-3.154-.214-7.384-4.256-7.384C13.175-.969-3.526 8.197 3.875 16.55"></svg:path>`,
})
export class MynauiCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
