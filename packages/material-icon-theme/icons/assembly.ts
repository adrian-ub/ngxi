import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAssemblyIcon],svg[material-icon-theme-assembly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff6e40" d="M8 6V2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h4v-4H4V6Zm16-4v4h4v20h-4v4h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-4 4h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2 6V8h2v4Zm-4 6h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m-2 6v-4h2v4Zm0-18c0 2 0 2-2 2v2h2v4h2V6Zm8 12c0 2 0 2-2 2v2h2v4h2v-8Z"></svg:path>`,
})
export class MaterialIconThemeAssemblyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
