import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGridAddIcon],svg[tdesign-grid-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h9v9H2zm2 2v5h5V4zm9-2h9v9h-9zm2 2v5h5V4zM2 13h9v9H2zm2 2v5h5v-5zm12.5-1.5h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></svg:path>`,
})
export class TdesignGridAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
