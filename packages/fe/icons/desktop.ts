import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feDesktopIcon],svg[fe-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 18h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h2v-2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7zM4 6v8h16V6z"></svg:path>`,
})
export class FeDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
