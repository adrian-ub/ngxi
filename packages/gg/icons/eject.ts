import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEjectIcon],svg[gg-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.95 14.395l1.414-1.415L12 6.617L5.636 12.98l1.414 1.415L12 9.445zM6 17.384h12v-2H6z"></svg:path>`,
})
export class GgEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
