import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiIvBagIcon],svg[mdi-iv-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1h-4C5 1 5 3 5 3v12s0 2 5 2v2h1v1c0 1.21.8 3 3 3h4v-2h-4c-.81 0-1-.55-1-1v-1h1v-2c5 0 5-2 5-2V3s0-2-5-2m3 11h-3v-1h3zm0-7h-3v1h3v2h-3v1h3v1H7V3.5c.3-.18 1.13-.5 3-.5h4c1.88 0 2.7.32 3 .5z"></svg:path>`,
})
export class MdiIvBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
