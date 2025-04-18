import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTvIcon],svg[zmdi-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v256q0 17-12.5 29.5T427 341H320v43H149v-43H43q-18 0-30.5-12.5T0 299V43q0-18 12.5-30.5T43 0zm0 299V43H43v256z"></svg:path>`,
})
export class ZmdiTvIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
