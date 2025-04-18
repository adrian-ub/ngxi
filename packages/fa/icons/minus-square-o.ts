import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faMinusSquareOIcon],svg[fa-minus-square-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 672v64q0 14-9 23t-23 9H288q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23m128 448V288q0-66-47-113t-113-47H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113m128-832v832q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q119 0 203.5 84.5T1408 288"></svg:path>`,
})
export class FaMinusSquareOIcon {
  readonly viewBox = input("0 0 1408 1408")
  readonly width = input("1em")
  readonly height = input("1em")
}
