import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirUnionHorizAltIcon],svg[iconoir-union-horiz-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 19A7 7 0 1 0 8 5a7 7 0 0 0 0 14"></svg:path><svg:path d="M16 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14"></svg:path></svg:g>`,
})
export class IconoirUnionHorizAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
