import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosFsharpIcon],svg[logos-fsharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#378BBA" d="M0 121.492L121.492 0v60.746l-60.746 60.746l60.746 60.745v60.746z"></svg:path><svg:path fill="#378BBA" d="m78.102 121.492l43.39-43.39v86.78z"></svg:path><svg:path fill="#30B9DB" d="M256 121.492L130.17 0v60.746l60.745 60.746l-60.746 60.745v60.746z"></svg:path>`,
})
export class LogosFsharpIcon {
  readonly viewBox = input("0 0 256 243")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
