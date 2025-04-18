import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileMagnifyingGlassFillIcon],svg[ph-file-magnifying-glass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 148a20 20 0 1 1-20-20a20 20 0 0 1 20 20m72-60v128a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-50.34 90.34l-11.2-11.19a36.05 36.05 0 1 0-11.31 11.31l11.19 11.2a8 8 0 0 0 11.32-11.32M196 88l-44-44v44Z"></svg:path>`,
})
export class PhFileMagnifyingGlassFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
