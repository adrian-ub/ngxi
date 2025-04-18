import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountOIcon],svg[zmdi-account-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.5 62Q152 62 139 75t-13 31.5t13 31.5t31.5 13t31.5-13t13-31.5T202 75t-31.5-13m.5 192q-44 0-87 16.5T41 299v23h260v-23q0-12-43-28.5T171 254m-.5-233Q206 21 231 46t25 60.5t-25 60.5t-60.5 25t-60.5-25t-25-60.5T110 46t60.5-25m0 192q31.5 0 69.5 9t69.5 29.5T341 299v64H0v-64q0-27 31.5-47.5T101 222t69.5-9"></svg:path>`,
})
export class ZmdiAccountOIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
