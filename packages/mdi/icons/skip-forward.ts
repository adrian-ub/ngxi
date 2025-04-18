import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSkipForwardIcon],svg[mdi-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14l7-7m7-7v14h2V5m-9 0v14l7-7"></svg:path>`,
})
export class MdiSkipForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
