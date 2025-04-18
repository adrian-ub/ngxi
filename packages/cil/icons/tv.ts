import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilTvIcon],svg[cil-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 88.5H302.627l72.5-72.5h-45.254l-72.5 72.5h-2.246l-72.5-72.5h-45.254l72.5 72.5H40a24.03 24.03 0 0 0-24 24v296a24.03 24.03 0 0 0 24 24h112V496h224v-63.5h96a24.03 24.03 0 0 0 24-24v-296a24.03 24.03 0 0 0-24-24M344 464H184v-31.5h160Zm120-63.5H48v-280h416Z"></svg:path>`,
})
export class CilTvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
