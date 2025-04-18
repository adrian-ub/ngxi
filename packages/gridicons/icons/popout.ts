import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsPopoutIcon],svg[gridicons-popout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2h2v2h11V5H8v2zm5.5-.5l-1.414 1.414L13.172 11H3v2h10.172l-3.086 3.086L11.5 17.5L17 12z"></svg:path>`,
})
export class GridiconsPopoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
