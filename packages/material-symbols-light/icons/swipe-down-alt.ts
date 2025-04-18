import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwipeDownAltIcon],svg[material-symbols-light-swipe-down-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21l-3.308-3.308l.708-.713l2.1 2.1v-5.102q-1.725-.215-2.863-1.472T7.5 9.5q0-1.864 1.318-3.182T12 5t3.182 1.318T16.5 9.5q0 1.748-1.137 3.005T12.5 13.977v5.102l2.1-2.094l.708.707z"></svg:path>`,
})
export class MaterialSymbolsLightSwipeDownAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
