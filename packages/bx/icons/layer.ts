import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxLayerIcon],svg[bx-layer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1 1 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a1 1 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999m-9.977 3.855L5.06 7.965l6.917-3.822l6.964 3.859z"></svg:path><svg:path fill="currentColor" d="M20.515 11.126L12 15.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5z"></svg:path><svg:path fill="currentColor" d="M20.515 15.126L12 19.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5z"></svg:path>`,
})
export class BxLayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
