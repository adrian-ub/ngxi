import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSkewMoreIcon],svg[mdi-skew-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.5 11l-2.09 9H5.5l2.09-9zM15 9H6L3 22h9zm6-3l-4-4v3H9v2h8v3z"></svg:path>`,
})
export class MdiSkewMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
