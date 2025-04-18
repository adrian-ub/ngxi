import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSoundmapIcon],svg[arcticons-soundmap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.352 38.048L5.5 41.229V9.952l9.852-3.181zm27.148 0l-9.852 3.181V9.952L42.5 6.771z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.648 41.229l-17.296-3.181V6.771l17.296 3.181z"></svg:path>`,
})
export class ArcticonsSoundmapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
