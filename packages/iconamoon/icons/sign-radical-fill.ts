import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSignRadicalFillIcon],svg[iconamoon-sign-radical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.026 4.773A1 1 0 0 1 8 4h13a1 1 0 1 1 0 2H8.794l-3.32 14.227a1 1 0 0 1-1.932.06l-1.5-5a1 1 0 1 1 1.916-.574l.421 1.404z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonSignRadicalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
