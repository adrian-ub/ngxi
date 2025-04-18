import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miLayoutIcon],svg[mi-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3.987A2 2 0 0 1 2 19zm2 4h16V5H4zm4 2H4v8h4zm2 8h10v-8H10z"></svg:path>`,
})
export class MiLayoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
