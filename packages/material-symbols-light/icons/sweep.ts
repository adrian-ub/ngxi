import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSweepIcon],svg[material-symbols-light-sweep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 17.5v-1h5v1zm-4.45-.192L1.08 12.34l.714-.715l4.256 4.256l9.155-9.156l.714.714zM14.5 13.5v-1h5v1zm4-4v-1h5v1z"></svg:path>`,
})
export class MaterialSymbolsLightSweepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
