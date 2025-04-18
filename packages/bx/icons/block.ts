import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBlockIcon],svg[bx-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2M4 12c0-1.846.634-3.542 1.688-4.897l11.209 11.209A7.95 7.95 0 0 1 12 20c-4.411 0-8-3.589-8-8m14.312 4.897L7.103 5.688A7.95 7.95 0 0 1 12 4c4.411 0 8 3.589 8 8a7.95 7.95 0 0 1-1.688 4.897"></svg:path>`,
})
export class BxBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
