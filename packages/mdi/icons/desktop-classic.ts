import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDesktopClassicIcon],svg[mdi-desktop-classic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c-1.11 0-2 .89-2 2v8c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 2h12v8H6zM4 15c-1.11 0-2 .89-2 2v3c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2v-3c0-1.11-.89-2-2-2zm4 2h12v3H8zm1 .75v1.5h4v-1.5zm6 0v1.5h4v-1.5z"></svg:path>`,
})
export class MdiDesktopClassicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
