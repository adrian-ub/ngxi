import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTvListIcon],svg[zmdi-tv-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v256q0 17-12.5 29.5T427 341H320v43H149v-43H43q-18 0-30.5-12.5T0 299V43q0-18 12.5-30.5T43 0zm0 299V43H43v256zm-43-192v42H149v-42zm0 85v43H149v-43zm-256-85v42H85v-42zm0 85v43H85v-43z"></svg:path>`,
})
export class ZmdiTvListIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
