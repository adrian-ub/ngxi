import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMailForwardIcon],svg[tabler-mail-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.5"></svg:path><svg:path d="m3 6l9 6l9-6m-6 12h6m-3-3l3 3l-3 3"></svg:path></svg:g>`,
})
export class TablerMailForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
