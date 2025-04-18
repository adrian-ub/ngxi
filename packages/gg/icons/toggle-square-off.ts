import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggToggleSquareOffIcon],svg[gg-toggle-square-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M0 7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2 0h20v10H2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgToggleSquareOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
