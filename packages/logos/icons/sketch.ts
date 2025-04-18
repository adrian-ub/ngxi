import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosSketchIcon],svg[logos-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FDB300" d="M128 0L55.855 7.628L0 82.607l128 149.055L256 82.607L200.146 7.628z"></svg:path><svg:path fill="#EB6C00" d="m0 82.608l128 149.054L51.846 82.608zm204.153 0L128 231.662L255.999 82.608z"></svg:path><svg:path fill="#FDAD00" d="M51.846 82.608L128 231.662l76.154-149.054z"></svg:path><svg:path fill="#FDD231" d="m55.855 7.628l-4.009 74.979L128 0zm148.298 74.98l-4.008-74.98L128 .001z"></svg:path><svg:path fill="#FDAD00" d="M204.154 82.608h51.845l-55.854-74.98zM0 82.608h51.846l4.009-74.98z"></svg:path><svg:path fill="#FEEEB7" d="M128 0L51.846 82.607h152.308z"></svg:path>`,
})
export class LogosSketchIcon {
  readonly viewBox = input("0 0 256 232")
  readonly width = input("1.11em")
  readonly height = input("1em")
}
