import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDoorSlidingOpenIcon],svg[mdi-door-sliding-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11v2H4v-2zm16-6h-5v14h5zM7 5H2v14h5zm15-2c1.11 0 2 .89 2 2v16H0V5c0-1.11.894-2 2-2h7v16h6V3zm-2 8h-2v2h2z"></svg:path>`,
})
export class MdiDoorSlidingOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
