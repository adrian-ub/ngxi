import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiDialIcon],svg[oi-dial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1C1.8 1 0 2.8 0 5h1c0-1.66 1.34-3 3-3s3 1.34 3 3h1c0-2.2-1.8-4-4-4m-.59 2.09A2 2 0 0 0 4 7c1.11 0 2-.89 2-2c0-.9-.59-1.65-1.41-1.91L4 3.97z"></svg:path>`,
})
export class OiDialIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
