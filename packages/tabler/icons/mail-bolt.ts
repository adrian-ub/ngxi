import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMailBoltIcon],svg[tabler-mail-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"></svg:path><svg:path d="m3 7l9 6l9-6m-2 9l-2 3h4l-2 3"></svg:path></svg:g>`,
})
export class TablerMailBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
