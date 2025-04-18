import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggNpmIcon],svg[gg-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zm1-3V6h12v12h-3V9h-3v9z" clip-rule="evenodd"></svg:path>`,
})
export class GgNpmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
