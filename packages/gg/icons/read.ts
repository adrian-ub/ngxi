import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggReadIcon],svg[gg-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m3.465-4a4.002 4.002 0 0 0-7.339 1H2a1 1 0 1 0 0 2h1.126A4.002 4.002 0 0 0 11 12h2a4 4 0 0 0 7.874 1H22a1 1 0 1 0 0-2h-1.126a4.002 4.002 0 0 0-7.339-1zM15 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0" clip-rule="evenodd"></svg:path>`,
})
export class GgReadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
