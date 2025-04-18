import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShapesFillIcon],svg[ri-shapes-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l6 10H6zm1 12.5h8v8h-8zM6.75 22a4.75 4.75 0 1 0 0-9.5a4.75 4.75 0 0 0 0 9.5"></svg:path>`,
})
export class RiShapesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
