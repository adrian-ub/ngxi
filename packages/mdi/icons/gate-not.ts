import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGateNotIcon],svg[mdi-gate-not-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v16l14.2-7c.42 1.19 1.54 2 2.8 2a3 3 0 0 0 3-3a3 3 0 0 0-3-3c-1.26 0-2.38.81-2.8 2zm2 3.3l9.7 4.7L4 16.7zM19 11c.5 0 1 .5 1 1s-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1"></svg:path>`,
})
export class MdiGateNotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
