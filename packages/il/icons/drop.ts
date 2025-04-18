import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilDropIcon],svg[il-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M515 206q45 45 69 103t26 118t-21 117t-67 103t-101 67t-116 23t-115-23t-102-67t-67-103T0 427t25-118t69-103L296 4q8-8 17 0z"></svg:path>`,
})
export class IlDropIcon {
  readonly viewBox = input("0 0 610 840")
  readonly width = input("0.73em")
  readonly height = input("1em")
}
