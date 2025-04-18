import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwipeUpAltIcon],svg[material-symbols-light-swipe-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q-1.864 0-3.182-1.318T7.5 14.5q0-1.748 1.138-3.005t2.862-1.472V4.921L9.4 7.016l-.708-.708L12 3l3.308 3.308l-.708.713l-2.1-2.1v5.102q1.725.216 2.863 1.472T16.5 14.5q0 1.864-1.318 3.182T12 19"></svg:path>`,
})
export class MaterialSymbolsLightSwipeUpAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
