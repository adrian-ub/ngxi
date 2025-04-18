import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFolderPersonIcon],svg[zmdi-folder-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 64q18 0 30.5 12.5T427 107v213q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21h128l42 43zm-106.5 64q-17.5 0-30 12.5t-12.5 30t12.5 30t30 12.5t30-12.5t12.5-30t-12.5-30t-30-12.5M363 299v-22q0-19-29.5-30.5t-56-11.5t-56 11.5T192 277v22z"></svg:path>`,
})
export class ZmdiFolderPersonIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
