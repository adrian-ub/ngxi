import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMailPauseIcon],svg[tabler-mail-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"></svg:path><svg:path d="m3 7l9 6l9-6m-4 10v5m4-5v5"></svg:path></svg:g>`,
})
export class TablerMailPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
