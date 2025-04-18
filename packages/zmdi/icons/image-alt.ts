import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiImageAltIcon],svg[zmdi-image-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 320q0 18-12.5 30.5T427 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21h384q17 0 29.5 12.5T469 64zM160 203l-75 96h299l-96-128l-75 96z"></svg:path>`,
})
export class ZmdiImageAltIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
