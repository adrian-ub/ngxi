import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiUsersSolidIcon],svg[mynaui-users-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13c-1.915 0-3.603.965-4.792 2.245c-1.182 1.273-1.958 2.948-1.958 4.505c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75c0-1.558-.775-3.232-1.958-4.505C12.602 13.965 10.915 13 9 13m8.204.301a.75.75 0 0 0-.408 1.444c.933.264 1.801 1.019 2.45 2.014c.647.995 1.004 2.122 1.004 2.99a.75.75 0 0 0 1.5 0c0-1.22-.478-2.627-1.248-3.808c-.769-1.181-1.9-2.244-3.298-2.64M9 3.5A3.75 3.75 0 1 0 9 11a3.75 3.75 0 0 0 0-7.5m6 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75a3.75 3.75 0 1 0 0-7.5"></svg:path>`,
})
export class MynauiUsersSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
