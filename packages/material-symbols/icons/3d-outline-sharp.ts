import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols3dOutlineSharpIcon],svg[material-symbols-3d-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9v6h4l1-1v-4l-1-1zm1.5 4.5v-3h2v3zm-8 1.5h4l.5-.5v-2l-.5-.5l.5-.5v-2l-.5-.5h-4v1.5h3v.75h-2v1.5h2v.75h-3zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbols3dOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
