import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSkipForwardOutlineIcon],svg[mdi-skip-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9.83L8.17 12L6 14.17zM4 5v14l7-7m9-7h-2v14h2m-7-9.17L15.17 12L13 14.17zM11 5v14l7-7"></svg:path>`,
})
export class MdiSkipForwardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
