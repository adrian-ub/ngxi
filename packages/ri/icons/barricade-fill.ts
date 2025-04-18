import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBarricadeFillIcon],svg[ri-barricade-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.556 19H21v2H3v-2h1.444l.89-4h13.333zM17.333 9l.89 4H5.777l.889-4zm-.444-2H7.11l.715-3.217A1 1 0 0 1 8.802 3h6.396a1 1 0 0 1 .976.783z"></svg:path>`,
})
export class RiBarricadeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
