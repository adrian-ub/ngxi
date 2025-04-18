import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDesktopLandscapeAddOutlineSharpIcon],svg[material-symbols-desktop-landscape-add-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6zm2-2v-5h9v5zm-4 4V4h20v8h-2V6H4v12h9v2zm14.5-8V9.5H9V8h9v4zM18 22v-3h-3v-2h3v-3h2v3h3v2h-3v3z"></svg:path>`,
})
export class MaterialSymbolsDesktopLandscapeAddOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
