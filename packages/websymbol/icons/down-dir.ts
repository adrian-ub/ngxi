import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolDownDirIcon],svg[websymbol-down-dir-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M265 766L0 236h529z"></svg:path>`,
})
export class WebsymbolDownDirIcon {
  readonly viewBox = input("0 0 529 1000")
  readonly width = input("0.53em")
  readonly height = input("1em")
}
