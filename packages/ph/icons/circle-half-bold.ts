import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfBoldIcon],svg[ph-circle-half-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 24.87a83.5 83.5 0 0 1 24 7.25v151.76a83.5 83.5 0 0 1-24 7.25ZM44 128a84.12 84.12 0 0 1 72-83.13v166.26A84.12 84.12 0 0 1 44 128m144 58.71V69.29a83.81 83.81 0 0 1 0 117.42"></svg:path>`,
})
export class PhCircleHalfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
