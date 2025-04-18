import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsHAltIcon],svg[gg-arrows-h-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.243 7.757l1.414 1.415L3.828 11h16.344l-1.829-1.828l1.414-1.415L24 12l-4.243 4.243l-1.414-1.415L20.171 13H3.828l1.829 1.828l-1.414 1.415L0 12z"></svg:path>`,
})
export class GgArrowsHAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
