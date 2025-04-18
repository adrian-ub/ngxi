import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHuaweiAssistantIcon],svg[arcticons-huawei-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="27.121" cy="17.107" r="12.607" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.975 29.662L14.73 42.234a3.68 3.68 0 0 1-5.965-4.255l7.78-14.007m15.777-12.13a7.204 7.204 0 0 1-.026 9.982m-14.015 9.92l-2.009 3.043"></svg:path>`,
})
export class ArcticonsHuaweiAssistantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
