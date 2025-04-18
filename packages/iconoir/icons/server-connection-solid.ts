import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirServerConnectionSolidIcon],svg[iconoir-server-connection-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 5A.75.75 0 0 1 6 4.25h12a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75h-5.25v4.5H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h8.25v-4.5H6a.75.75 0 0 1-.75-.75zm4.262 3.442A.75.75 0 0 1 9.567 9.5l-.01.01a.75.75 0 1 1-1.114-1.003l.01-.01a.75.75 0 0 1 1.059-.056M12.568 9.5a.75.75 0 1 0-1.115-1.004l-.01.011a.75.75 0 1 0 1.114 1.004z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirServerConnectionSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
