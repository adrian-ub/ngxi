import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPictureInPictureIcon],svg[zmdi-picture-in-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 85v128H213V85zm43-85q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 342V42H43v300z"></svg:path>`,
})
export class ZmdiPictureInPictureIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
