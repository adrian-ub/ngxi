import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGridViewIcon],svg[tdesign-grid-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h9v9H2zm2 2v5h5V4zm9-2h9v9h-9zm2 2v5h5V4zM2 13h9v9H2zm2 2v5h5v-5zm9-2h9v9h-9zm2 2v5h5v-5z"></svg:path>`,
})
export class TdesignGridViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
