import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRemoteTvIcon],svg[mdi-remote-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h6c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2h-2v2h-2V2zm2 4h2v2h2v2h-2v2h-2v-2H9V8h2zm-2 8h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"></svg:path>`,
})
export class MdiRemoteTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
