import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosSitepointIcon],svg[logos-sitepoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path fill="#07508B" d="m249.63 171.958l-22.595-21.6l-71.426-65.624l-30.791 29.24c-2.815 3.83-2.624 9 .574 12.581l28.15 24.243l-.097.038l30.256 28.915c3.58 3.983 3.485 9.881-.268 13.71l-81.575 77.516l37.092 35.406l110.68-105.166c8.484-8.08 8.503-21.179 0-29.298z"></svg:path><svg:path fill="#E57B25" d="m6.343 134.464l22.596 21.543l71.464 65.623l30.772-29.24a9.965 9.965 0 0 0-.574-12.581l-28.15-24.281l.096-.058l-30.274-28.895c-3.543-3.964-3.447-9.881.287-13.692l81.575-77.553L117.043 0L6.363 105.166c-8.484 8.08-8.484 21.198 0 29.298z"></svg:path></svg:g>`,
})
export class LogosSitepointIcon {
  readonly viewBox = input("0 0 256 307")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
