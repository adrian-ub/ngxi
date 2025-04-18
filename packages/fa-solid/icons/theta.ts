import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidThetaIcon],svg[fa-solid-theta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 8C84.34 8 0 116.94 0 256s84.34 248 192 248 192-108.94 192-248S299.66 8 192 8zm0 96c41.44 0 77.35 44.41 90.43 104H101.57c13.08-59.59 48.99-104 90.43-104zm0 304c-41.44 0-77.35-44.41-90.43-104h180.86c-13.08 59.59-48.99 104-90.43 104z" fill="currentColor"></svg:path>`,
})
export class FaSolidThetaIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
