import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons5starStudentsIcon],svg[arcticons-5star-students-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.361 28.547l-4.98-2.724l-5.008 2.668l.984-5.706l-4.018-4.067l5.588-.802l2.525-5.182l2.469 5.21l5.579.865l-4.062 4.022zM20.092 9.473L5.5 14.415L8.166 24.1s7.784-4.57 12.378-2.438c4.654 2.16 5.748 7.186 3.183 11.015c-2.65 3.955-10.677 5.055-13.75 5.851"></svg:path>`,
})
export class Arcticons5starStudentsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
