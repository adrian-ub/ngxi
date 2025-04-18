import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrRemoteIcon],svg[arcticons-ir-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.63 43.5V22.844a1.47 1.47 0 0 1 1.475-1.474h15.653a1.47 1.47 0 0 1 1.474 1.474V43.5z"></svg:path><svg:circle cx="17.989" cy="24.539" r="1.474" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.994 14.86c-1.73-2.72-8.568-5.043-12.005 0m16.379-5.581c-3.915-4.619-13.824-7.915-20.736 0"></svg:path>`,
})
export class ArcticonsIrRemoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
