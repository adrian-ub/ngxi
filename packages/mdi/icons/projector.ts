import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorIcon],svg[mdi-projector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6c-1.13 0-2.23.35-3.16 1H4c-1.11 0-2 .89-2 2v6c0 1.11.89 2 2 2h1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h6v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h1c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2h-.85c-.92-.65-2.02-1-3.15-1m0 1.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5a3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 16 7.5M4 9h4v1H4zm12 0a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M4 11h4v1H4zm0 2h4v1H4z"></svg:path>`,
})
export class MdiProjectorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
