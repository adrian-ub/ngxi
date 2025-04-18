import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTikcodeIcon],svg[gg-tikcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9 5H5v4h4zM3 3v8h8V3zm16 2h-4v4h4zm-6-2v8h8V3zM9 15H5v4h4zm-6-2v8h8v-8z" clip-rule="evenodd"></svg:path><svg:path d="M13 13h2v8h-2zm3 0h2v8h-2zm3 0h2v8h-2z"></svg:path></svg:g>`,
})
export class GgTikcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
