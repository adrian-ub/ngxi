import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsPlayIcon],svg[gravity-ui-bars-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 3.25a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75m.75 3a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5zm0 3.75a.75.75 0 0 0 0 1.5h4.25a.75.75 0 0 0 0-1.5zm11 3.116a1 1 0 0 0 0-1.732l-3-1.732a1 1 0 0 0-1.5.866v3.464a1 1 0 0 0 1.5.866z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsPlayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
