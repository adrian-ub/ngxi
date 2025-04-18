import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiEjectAltIcon],svg[zmdi-eject-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m128 115l-98 98l-30-30L128 55l128 128l-30 30zM0 320v-43h256v43z"></svg:path>`,
})
export class ZmdiEjectAltIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
