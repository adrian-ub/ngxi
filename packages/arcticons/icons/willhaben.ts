import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWillhabenIcon],svg[arcticons-willhaben-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.504 13.131l-2.184 8.738l-2.185-8.738l-2.184 8.738l-2.185-8.738m11.469 0v8.738m2.73-8.738v8.738h4.369m2.185-8.738v8.738h4.369m-14.02 2.641l-3.742 6.475m9.492-6.475l-5.128 8.92m-4.364-2.445c-2 3.464 2.33 5.964 4.33 2.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".979" d="M42.5 24.51h-27a7.01 7.01 0 0 1-7.01-7.01h0a7.01 7.01 0 0 1 7.01-7.01h27"></svg:path>`,
})
export class ArcticonsWillhabenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
