import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeListNumberedIcon],svg[icomoon-free-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13h10v2H6zm0-6h10v2H6zm0-6h10v2H6zM3 0v4H2V1H1V0zM2 8.219V9h2v1H1V7.719l2-.938V6H1V5h3v2.281zM4 11v5H1v-1h2v-1H1v-1h2v-1H1v-1z"></svg:path>`,
})
export class IcomoonFreeListNumberedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
