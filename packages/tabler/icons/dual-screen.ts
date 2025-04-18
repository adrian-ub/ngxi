import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDualScreenIcon],svg[tabler-dual-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m5 4l8 3v15l-8-3z"></svg:path><svg:path d="M13 19h6V4H5"></svg:path></svg:g>`,
})
export class TablerDualScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
