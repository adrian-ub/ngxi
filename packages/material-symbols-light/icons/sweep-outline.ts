import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSweepOutlineIcon],svg[material-symbols-light-sweep-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 17.5v-1h5v1zm-4.45-.192l-4.963-4.964l.713-.713l4.25 4.25l9.15-9.15l.714.713zM14.5 13.5v-1h5v1zm4-4v-1h5v1z"></svg:path>`,
})
export class MaterialSymbolsLightSweepOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
