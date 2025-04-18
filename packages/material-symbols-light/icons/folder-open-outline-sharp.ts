import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderOpenOutlineSharpIcon],svg[material-symbols-light-folder-open-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h6.596l2 2h9.231v1h-9.633l-2-2H4v11.962l2.266-7.577h16.6L20.288 19zm2.042-1H19.54l1.973-6.616H7.015zm0 0l1.974-6.616zM4 8V6z"></svg:path>`,
})
export class MaterialSymbolsLightFolderOpenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
