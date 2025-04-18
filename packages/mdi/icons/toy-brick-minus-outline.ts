import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickMinusOutlineIcon],svg[mdi-toy-brick-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20H3V6h2V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1h2V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1h2v7.35c-.63-.22-1.3-.35-2-.35V8H5v10h8.09c-.05.33-.09.66-.09 1s.04.67.09 1M23 18h-8v2h8z"></svg:path>`,
})
export class MdiToyBrickMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
