import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBuildingOutlineIcon],svg[lsicon-building-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 11h1m1 0h1M6 8h1M4 8h1M4 5h1m1 0h1m6.5 8.5h-11v-11h6v5h5zm-5-4h3v4h-3z"></svg:path>`,
})
export class LsiconBuildingOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
